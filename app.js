const CONFIG = {
    spreadsheetId: "1YHQOEa6GdjCeGHmV3HL418irLFGw6rNxbBAVZODeYMk",
    serviceAccountEmail: "test-gia-ason@api-test-sheet-161.iam.gserviceaccount.com",
    privateKey: `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC3NN84hLTkQPZd
Lj7niXZTICq7nHsuTn3J6r2Paq12m70/lYSmrwh1i0EStr9bO19QM8cevGlslwGr
WSVOLJlc6+w1HGPKvRXtA41kYV9MYIvpzIPQtkFE7Hxq71QyBARcv39Lfzze6Ioj
3G8VBvAKFLAnCUr97GHRv+KbCTFxPZupd3PEB+xS5ZUlzdBCEZvDid3iXaaEJJ+l
Td1apAGQHjtnDTLOkiTa8zf7X5ebALwnI9MziOdN8VyprHXGhkachPbKyrG0QwEs
2jtiI6Y5ULsBPjNefoavH8MKU5DEAT9h0fZ7KfsKYVMDuXqmEKBs0D3B4Z6aDZQW
wT2dDRZDAgMBAAECggEAEIuVoSzZVuFhaz1GI9ji0IacjvO50cIq7M8Zrj4/F756
Ew6PIhKENafAb7U4INm2AnzUMO8CqL9Jpxs85qUM3W4JysSByqLUiRW2184amIyb
j7jCXfLBTQn8AbHgrUepl5d/vBmFYMgon/mqjbNiGDb4FZgEQSkie5o6fi/dWp5d
NahbZl+WTOB/znhAfKh/zferHNxldR/ERmwOubZUerkqysWiBigc3ovpLSUof9ur
z3hNPPp0CKQjF40xuQc6FYTHUHMLuMvp78PXuc/mYqQmZ8VOGhU+faGtZ4m+QJly
dF5dS8U5cwKEF+ptuAUiWSahn6INb9yKn3+FcsW0UQKBgQDb8N4eWFvbgpRo/vxo
wBN2u2TWubj6clcrq/1a+VR0njC28Can0ogJHhrFhPxVs5D/rugs3HlbyAXJFptY
V0DZPCwBxGU5P5RbGjXWWEUXjp4ISKQD8WKfVlXNr79TqLdOg2NZBYQAi06Cpo/T
PV9l7LSG2Tj/9WdvD7W2wvrpaQKBgQDVPjpJN6xh7+sHtSU0mjKvrqigpHbuSQ/o
XpUaWSIpJffm5QpFPAOcTT5mHZCyllicJQIrfPSY+sH8n+sF03CUqVkV4Q2UqfOf
pFaLDB4P6SQ8iesZyF4VKFrj/cAvRJmp0e5W/DRnFkoEp+8c+nrru2+Dzm9kb7Uq
0CiltqYAywKBgBtcfrV1to+7Ue0x84KwintV2rifyDRX7yI+tjkQFYKgf1zyyUxN
c6D2vsvdvGqI+TvlrXqPPwW8/4NBrbeyux2LT8o0fYc+sp0WyKXOu2Gv21caelUH
PYam/eultn6Y2Z0J2V0kw4Qx0GWOhQv5cZnDdb3k3iNxixmU8b03ynEpAoGBAKEA
7O0fNe50QRZ+tOq0ihSPYQ55XrqnO3WNBDLynZJH8pbI1CpWF7vJrpVXOUs9rQWo
A61mGR/wJMtiywaJEHWOL48PbzuR3jno0NcHfSMyOoPi9jlvSWncIFQH4TVPLF5F
/Rh8L+ytrZE6YpWUoX6e9KGmGgDRPw5mQGpuL4RlAoGADe9n080SXlsUk4nHVjUz
Efv7EBoBkgOpqb9T1foRfJl46NxmmTOYV3iGIhjwcDskEg284k4iq/gH6EEFyEBc
Vz13jzB1nBgjfezFesVQz7bA/+Wik6HZtxAxVg38BKMt+Q1tYw9wOjbGPqOn++VC
sR2Sh8e3h3Knd6j1tceRIFU=
-----END PRIVATE KEY-----`,
    tokenUrl: "https://oauth2.googleapis.com/token",
    tabs: {
        'THONG_TIN': {
            range: 'THONG_TIN!A2:K',
            headers: ['id', 'truong', 'ten', 'ten_dang_nhap', 'mk', 'mail', 'ghi_chu', 'noi_dung', 'link', 'link_2', 'anh'],
            priceCols: [],
            imgCol: 10
        }
    }
};

const XNK_TT_TAB_STORAGE_KEY = 'xnkTtActiveTab';

let currentTab = 'THONG_TIN', allData = [], accessToken = null, tokenExpiry = 0;
let currentPage = 1, rowsPerPage = 150, filteredData = [];
let sheetTitleToIdCache = null;

const TAB_LABELS = {
    THONG_TIN: 'THÔNG TIN'
};

const ID_PREFIXES = {
    THONG_TIN: 'TT'
};

async function getAccessToken() {
    if (accessToken && Date.now() < tokenExpiry - 300000) return accessToken;
    const header = { alg: "RS256", typ: "JWT" }, now = Math.floor(Date.now() / 1000),
        payload = { iss: CONFIG.serviceAccountEmail, scope: "https://www.googleapis.com/auth/spreadsheets", aud: CONFIG.tokenUrl, exp: now + 3600, iat: now };
    const sJWT = KJUR.jws.JWS.sign("RS256", JSON.stringify(header), JSON.stringify(payload), CONFIG.privateKey);
    const res = await fetch(CONFIG.tokenUrl, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${sJWT}` });
    const data = await res.json();
    accessToken = data.access_token; tokenExpiry = Date.now() + (data.expires_in * 1000);
    return accessToken;
}

async function switchTab(tabName) {
    currentTab = CONFIG.tabs[tabName] ? tabName : 'THONG_TIN';
    try { sessionStorage.setItem(XNK_TT_TAB_STORAGE_KEY, currentTab); } catch (_) { /* ignore */ }
    document.querySelectorAll('.tab').forEach(t => {
        t.classList.toggle('active', t.dataset.tab === currentTab);
    });
    document.getElementById('tableWrapper').style.display = 'block';
    document.getElementById('pagination').style.display = 'flex';
    document.getElementById('headerActions').style.display = 'flex';
    document.getElementById('pageTitle').innerText = 'Hệ thống';
    const uploadBtn = document.getElementById('uploadBtn');
    const addBtn = document.getElementById('addBtn');
    const truongFilter = document.getElementById('truongFilter');
    const isThongTinModule = currentTab === 'THONG_TIN';
    if (uploadBtn) {
        uploadBtn.innerHTML = `<i data-lucide="upload" style="width:18px;"></i> Tải ${currentTab} Lên`;
        uploadBtn.style.display = 'flex';
        lucide.createIcons();
    }
    if (addBtn) addBtn.style.display = 'flex';
    if (truongFilter) {
        truongFilter.style.display = isThongTinModule ? 'block' : 'none';
        lucide.createIcons();
    }
    document.getElementById('searchInput').value = '';
    resetFilters();
    currentPage = 1;
    await fetchData();
}

function toggleSidebar() {
    document.body.classList.toggle('sidebar-collapsed');
    const icon = document.querySelector('.sidebar-toggle i');
    if (icon) {
        icon.setAttribute('data-lucide', document.body.classList.contains('sidebar-collapsed') ? 'panel-left-open' : 'panel-left-close');
        lucide.createIcons();
    }
}

async function reloadCurrentTab() {
    currentPage = 1;
    await fetchData();
    filterTable();
}

async function fetchData() {
    document.getElementById('loading').style.display = 'flex';
    document.querySelector('#loading p').innerText = `Đang tải dữ liệu ${currentTab}...`;
    try {
        const token = await getAccessToken();
        const tabConfig = CONFIG.tabs[currentTab];
        const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${tabConfig.range}`, { headers: { Authorization: `Bearer ${token}` } });
        const data = await res.json();
        const rawRows = data.values || [];
        allData = rawRows.map((row, i) => {
            const arr = Array.isArray(row) ? row.slice() : [];
            arr._sheetRow = i + 2;
            return arr;
        });
        filteredData = [...allData];
        populateFilters();
        renderHeaders();
        renderTable();
    } catch (e) {
        console.error("Lỗi khi tải dữ liệu:", e);
        alert("Không thể tải dữ liệu. Vui lòng kiểm tra lại sheet '" + currentTab + "' có tồn tại không.");
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}

function renderHeaders() {
    const head = document.getElementById('tableHead');
    const tabConfig = CONFIG.tabs[currentTab];
    head.innerHTML = `<tr>${tabConfig.headers.map(h => `<th>${h.toUpperCase()}</th>`).join('')}</tr>`;
}

function normalizeRow(row) {
    const source = Array.isArray(row) ? row : [];
    return getStorageHeaders().map((_, idx) => String(source[idx] ?? '').trim());
}

function getStorageHeaders(tabName = currentTab) {
    const tabConfig = CONFIG.tabs[tabName];
    return tabConfig.headers;
}

function colName(index) {
    let name = '';
    let num = index + 1;
    while (num > 0) {
        const rem = (num - 1) % 26;
        name = String.fromCharCode(65 + rem) + name;
        num = Math.floor((num - 1) / 26);
    }
    return name;
}

function getRowId(row) {
    return String((row && row[0]) || '').trim();
}

function getRowById(id) {
    const key = String(id || '').trim();
    if (!key) return null;
    return allData.find(row => getRowId(row) === key) || null;
}

function generateNextId(extraIds = []) {
    const ids = [...allData.map(getRowId), ...extraIds].filter(Boolean);
    const numericIds = ids.map(id => Number(id)).filter(n => Number.isFinite(n));
    if (numericIds.length === ids.length && numericIds.length) {
        return String(Math.max(...numericIds) + 1);
    }
    const now = new Date();
    const stamp = [
        now.getFullYear(),
        String(now.getMonth() + 1).padStart(2, '0'),
        String(now.getDate()).padStart(2, '0'),
        String(now.getHours()).padStart(2, '0'),
        String(now.getMinutes()).padStart(2, '0'),
        String(now.getSeconds()).padStart(2, '0')
    ].join('');
    let candidate = `${ID_PREFIXES[currentTab] || currentTab}-${stamp}`;
    let suffix = 1;
    while (ids.includes(candidate)) {
        suffix += 1;
        candidate = `${ID_PREFIXES[currentTab] || currentTab}-${stamp}-${suffix}`;
    }
    return candidate;
}

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function setDatalistOptions(id, values) {
    const datalist = document.getElementById(id);
    if (!datalist) return;
    const counts = new Map();
    values.filter(Boolean).forEach(value => counts.set(value, (counts.get(value) || 0) + 1));
    const uniqueValues = [...counts.keys()].sort();
    datalist.innerHTML = uniqueValues
        .map(value => `<option value="${escapeHtml(value)}" label="${escapeHtml(value)} (${counts.get(value)})"></option>`)
        .join('');
}

function populateFilters() {
    // Thu thập các giá trị của cột 'truong' (index 1) để đưa vào datalist Lọc theo Trường
    const truongValues = allData.map(row => String(row[1] || '').trim()).filter(Boolean);
    setDatalistOptions('truongOptions', truongValues);
}

function resetFilters() {
    ['truongFilter'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
}

function getDataSheetRow(row) {
    if (row && typeof row._sheetRow === 'number' && row._sheetRow >= 2) return row._sheetRow;
    const idx = allData.indexOf(row);
    return idx >= 0 ? idx + 2 : 0;
}

async function writeRecordRow(row, sheetRow) {
    const token = await getAccessToken();
    const cleanRow = normalizeRow(row);
    const rowNum = Number(sheetRow);
    if (!rowNum || rowNum < 2) throw new Error('Không xác định được dòng cần cập nhật.');
    const endCol = colName(getStorageHeaders().length - 1);

    const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${currentTab}!A${rowNum}:${endCol}${rowNum}?valueInputOption=RAW`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ values: [cleanRow] })
    });
    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error?.message || 'Cập nhật dòng thất bại.');
    }
}

async function appendRecordRows(rows) {
    if (!rows.length) return;
    const token = await getAccessToken();
    const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${currentTab}!A2:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ values: rows.map(normalizeRow) })
    });
    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error?.message || 'Thêm dòng thất bại.');
    }
}

async function upsertRecordRows(rows) {
    const cleanRows = rows.map(normalizeRow).filter(row => row.some(cell => String(cell || '').trim()));
    const generatedIds = [];
    cleanRows.forEach(row => {
        if (!row[0]) {
            const id = generateNextId(generatedIds);
            row[0] = id;
            generatedIds.push(id);
        }
    });
    if (!cleanRows.length) throw new Error('Không có dòng dữ liệu hợp lệ.');

    const existingById = new Map(allData.map(row => [getRowId(row), row]).filter(([id]) => id));
    const updates = [];
    const appends = [];
    for (const row of cleanRows) {
        const existing = existingById.get(row[0]);
        if (existing) {
            updates.push({ row, sheetRow: getDataSheetRow(existing) });
        } else {
            appends.push(row);
            existingById.set(row[0], row);
        }
    }

    for (const item of updates) {
        await writeRecordRow(item.row, item.sheetRow);
    }
    await appendRecordRows(appends);
    return { updated: updates.length, inserted: appends.length };
}

function getFormRowValue(row, header, idx) {
    if (!row) return '';
    return row[idx] || '';
}

function renderFormFields(row = null) {
    const container = document.getElementById('formFields');
    const headers = getStorageHeaders();
    container.innerHTML = headers.map((header, idx) => {
        const rawValue = getFormRowValue(row, header, idx);
        const value = escapeHtml(rawValue);
        
        if (header === 'id') {
            const idValue = row ? rawValue : generateNextId();
            return `<input id="formField_${idx}" data-field="${header}" type="hidden" value="${escapeHtml(idValue)}">`;
        }

        if (header === 'ghi_chu' || header === 'noi_dung') {
            return `<label><span>${header.toUpperCase()}</span><textarea id="formField_${idx}" data-field="${header}" rows="4">${value}</textarea></label>`;
        }

        if (header === 'truong') {
            return `<label><span>TRƯỜNG</span><input id="formField_${idx}" data-field="${header}" type="text" value="${value}" list="truongOptions" autocomplete="off"></label>`;
        }

        if (header === 'mail') {
            return `<label><span>EMAIL</span><input id="formField_${idx}" data-field="${header}" type="email" value="${value}"></label>`;
        }

        return `<label><span>${header.toUpperCase()}</span><input id="formField_${idx}" data-field="${header}" type="text" value="${value}"></label>`;
    }).join('');
}

async function openRecordForm(rowIndex = null) {
    const modal = document.getElementById('productModal');
    const title = document.getElementById('productModalTitle');
    const row = rowIndex === null ? null : filteredData[rowIndex];
    
    document.getElementById('editingSheetRow').value = row ? getDataSheetRow(row) : '';
    renderFormFields(row);
    title.innerText = row ? `Sửa thông tin` : `Thêm mới thông tin`;
    modal.classList.add('active');
    document.getElementById('formField_1')?.focus();
    lucide.createIcons();
}

function closeProductForm() {
    document.getElementById('productModal').classList.remove('active');
}

async function saveRecordFromForm(event) {
    event.preventDefault();
    const headers = getStorageHeaders();
    const row = headers.map((_, idx) => document.getElementById(`formField_${idx}`)?.value.trim() || '');
    if (!row[0]) {
        row[0] = generateNextId();
    }

    document.getElementById('loading').style.display = 'flex';
    document.querySelector('#loading p').innerText = `Đang lưu dữ liệu...`;
    try {
        const editingSheetRow = Number(document.getElementById('editingSheetRow').value);
        const existing = getRowById(row[0]);
        const targetSheetRow = editingSheetRow || (existing ? getDataSheetRow(existing) : 0);
        if (targetSheetRow) {
            await writeRecordRow(row, targetSheetRow);
        } else {
            await appendRecordRows([row]);
        }
        closeProductForm();
        await fetchData();
        filterTable();
    } catch (err) {
        console.error(err);
        alert(`Không lưu được dữ liệu: ` + err.message);
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}

function initDragAndDrop() {
    const overlay = document.getElementById('dropOverlay');

    window.addEventListener('dragover', (e) => {
        e.preventDefault();
        overlay.classList.add('active');
    });

    window.addEventListener('dragleave', (e) => {
        if (e.relatedTarget === null) overlay.classList.remove('active');
    });

    window.addEventListener('drop', (e) => {
        e.preventDefault();
        overlay.classList.remove('active');
        if (e.dataTransfer.files.length > 0) {
            processFiles(Array.from(e.dataTransfer.files));
        }
    });
}

function renderTable() {
    const tbody = document.getElementById('tableBody');
    const tabConfig = CONFIG.tabs[currentTab];

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = filteredData.slice(start, end);

    tbody.innerHTML = pageData.map((row, rowIndex) => {
        const cells = tabConfig.headers.map((_, idx) => {
            const cell = row[idx] || '';
            if (idx === tabConfig.imgCol && cell) {
                const firstImg = cell.split(',')[0].trim();
                return `<td>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <img src="${firstImg}" class="table-img" onerror="this.style.display='none'">
                        <a href="${cell.split(',')[0].trim()}" target="_blank" style="color: var(--primary); text-decoration: none; font-size: 11px; font-weight: 600;">Xem</a>
                    </div>
                </td>`;
            }
            const cellStr = String(cell || '').trim();
            if (cellStr.startsWith('http://') || cellStr.startsWith('https://')) {
                const parts = cellStr.split(',');
                const linksHtml = parts.map((l, i) => `<a href="${l.trim()}" target="_blank" style="color: var(--primary); font-weight: 600; text-decoration: none;">Link ${parts.length > 1 ? i + 1 : ''}</a>`.trim());
                return `<td>${linksHtml.join(', ')}</td>`;
            }
            return `<td>${escapeHtml(cell || '')}</td>`;
        }).join('');

        const editAction = ` ondblclick="openRecordForm(${start + rowIndex})"`;
        return `<tr${editAction}>${cells}</tr>`;
    }).join('');

    renderPagination();
}

function renderPagination() {
    const totalRows = filteredData.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage) || 1;
    const pagination = document.getElementById('pagination');

    if (totalRows <= rowsPerPage) {
        pagination.innerHTML = '';
        return;
    }

    pagination.innerHTML = `
        <button class="pagination-btn" onclick="changePage(-1)" ${currentPage === 1 ? 'disabled' : ''}>
            <i data-lucide="chevron-left" style="width:16px;"></i> Trước
        </button>
        <div class="page-info">Trang ${currentPage} / ${totalPages} (${totalRows} dòng)</div>
        <button class="pagination-btn" onclick="changePage(1)" ${currentPage === totalPages ? 'disabled' : ''}>
            Tiếp <i data-lucide="chevron-right" style="width:16px;"></i>
        </button>
    `;
    lucide.createIcons();
}

function changePage(delta) {
    currentPage += delta;
    renderTable();
    document.querySelector('.table-wrapper').scrollTop = 0;
}

function filterTable() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const truong = (document.getElementById('truongFilter')?.value || '').toLowerCase();
    filteredData = allData.filter(row => {
        const matchesSearch = row.some(cell => String(cell).toLowerCase().includes(term));
        const matchesTruong = !truong || String(row[1] || '').toLowerCase().includes(truong);
        return matchesSearch && matchesTruong;
    });
    currentPage = 1;
    renderTable();
}

async function handleFileUpload(event) {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;
    await processFiles(files);
    event.target.value = '';
}

function readExcelRows(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                let rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                if (rows[0] && rows[0][0] && String(rows[0][0]).toUpperCase().includes("ID")) {
                    rows = rows.slice(1);
                }
                resolve(rows);
            } catch (err) {
                reject(err);
            }
        };
        reader.onerror = () => reject(new Error(`Không thể đọc file ${file.name}`));
        reader.readAsArrayBuffer(file);
    });
}

function truncateExcelNumericCellsInRow(row) {
    if (!Array.isArray(row)) return row;
    return row.map(cell => {
        if (typeof cell === 'number' && Number.isFinite(cell)) return Math.trunc(cell);
        return cell;
    });
}

async function processFiles(files) {
    const excelFiles = files.filter(f => /\.(xlsx|xls|csv)$/i.test(f.name));
    if (!excelFiles.length) {
        alert("Vui lòng tải lên file Excel hoặc CSV.");
        return;
    }

    const fileNames = excelFiles.map(f => f.name).join(", ");
    const confirmMessage = `Dữ liệu từ ${excelFiles.length} file (${fileNames}) sẽ cập nhật sheet '${currentTab}' theo id. Id đã có sẽ cập nhật, id mới sẽ thêm dòng. Tiếp tục?`;
    if (!confirm(confirmMessage)) return;

    document.getElementById('loading').style.display = 'flex';
    document.querySelector('#loading p').innerText = `Đang xử lý ${excelFiles.length} file và cập nhật Google Sheets...`;

    try {
        const rowsFromFiles = await Promise.all(excelFiles.map(readExcelRows));
        const allRowsToUpload = rowsFromFiles
            .flat()
            .filter(r => Array.isArray(r) && r.some(c => String(c || '').trim() !== ''))
            .map(truncateExcelNumericCellsInRow);

        if (!allRowsToUpload.length) {
            throw new Error("Không có dòng dữ liệu hợp lệ để tải lên.");
        }

        const result = await upsertRecordRows(allRowsToUpload);
        alert(`Đã cập nhật ${result.updated} dòng và thêm mới ${result.inserted} dòng vào sheet '${currentTab}'.`);
        try { sessionStorage.setItem(XNK_TT_TAB_STORAGE_KEY, currentTab); } catch (_) { }
        await fetchData();
        filterTable();
    } catch (err) {
        console.error(err);
        alert("Lỗi khi tải dữ liệu: " + err.message);
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}

async function init() {
    lucide.createIcons();
    document.getElementById('pageTitle').innerText = 'Hệ thống';
    initDragAndDrop();
    let saved = '';
    try { saved = sessionStorage.getItem(XNK_TT_TAB_STORAGE_KEY) || ''; } catch (_) { }
    await switchTab(CONFIG.tabs[saved] ? saved : 'THONG_TIN');
}

init();

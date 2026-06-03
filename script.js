Chart.defaults.color = '#475569';
Chart.defaults.font.family = 'Inter, system-ui, -apple-system, sans-serif';
Chart.defaults.font.size = 12;
Chart.defaults.plugins.tooltip.backgroundColor = '#0f172a';
Chart.defaults.plugins.tooltip.borderColor = '#1e293b';
Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.plugins.tooltip.titleFont = { weight: '600', size: 13 };
Chart.defaults.plugins.tooltip.bodyFont = { size: 12 };
Chart.defaults.plugins.tooltip.padding = 10;
Chart.defaults.scale.grid.color = '#e2e8f0';
Chart.defaults.scale.ticks.color = '#475569';

function switchTab(id, btn) {
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
  });
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
  btn.setAttribute('aria-selected', 'true');
}
window.switchTab = switchTab;

// ─── RAW DATA FROM NUMBERS FILE ───────────────────────────────────────────────

// All clients with tonnage data (Sheet 4)
const sortedClients = [
  { name: 'Carrier Refrigeration', person: 'Sangeet Dhasmana', target: 300000, achieved: 228544.57, activeDays: 31 },
  { name: 'Bombax (HYD)', person: 'Chirag Kumar', target: 85111, achieved: 86535.47, activeDays: 31 },
  { name: 'Carrier CTD', person: 'Deepak Sharma', target: 70362, achieved: 33510.12, activeDays: 31 },
  { name: 'Haier CCR', person: 'Shiva', target: 55000, achieved: 23771.55, activeDays: 31 },
  { name: 'Sukuga Technologies', person: 'Shiva', target: 17000, achieved: 18343.53, activeDays: 31 },
  { name: 'Mitras Technocrafts', person: 'Shiva', target: 10000, achieved: 17745.42, activeDays: 31 },
  { name: 'Grover Innovations', person: 'Shiva', target: 10000, achieved: 14251.52, activeDays: 31 },
  { name: 'Cosmos Pumps', person: 'Shiva', target: 20000, achieved: 14105.22, activeDays: 31 },
  { name: 'Loom Solar', person: 'Deepak Sharma', target: 120000, achieved: 13540, activeDays: 31 },
  { name: 'Kumar Services', person: 'Deepak Sharma', target: 4000, achieved: 13026.8, activeDays: 31 },
  { name: 'Oneiric Appliances', person: 'Deepak Sharma', target: 32876, achieved: 4768.98, activeDays: 31 },
  { name: 'Medical Science', person: 'Chirag Kumar', target: 15000, achieved: 3908, activeDays: 31 },
  { name: 'Vaidrishi Laboratories', person: 'Chirag Kumar', target: 7514, achieved: 3323.08, activeDays: 31 },
  { name: 'Indu Sports', person: 'Chirag Kumar', target: 1047, achieved: 1047, activeDays: 31 },
  { name: 'Frick', person: 'Shiva', target: 807, achieved: 807, activeDays: 31 },
  { name: 'Edusoft Healthcare', person: 'Deepak Sharma', target: 10000, achieved: 536.05, activeDays: 31 },
  { name: 'Aurinko Healthcare', person: 'Chirag Kumar', target: 1047, achieved: 468, activeDays: 31 },
  { name: 'Global Impex', person: 'Anjali', target: 1000, achieved: 0, activeDays: 31 },
  { name: 'GCPA', person: 'Shiva', target: 25000, achieved: 0, activeDays: 31 },
  { name: 'Pangea', person: 'Deepak Sharma', target: 20000, achieved: 0, activeDays: 31 },
  { name: 'RSR', person: 'Deepak Sharma', target: 10000, achieved: 0, activeDays: 31 },
  { name: 'Epson', person: 'Deepak Sharma', target: 20000, achieved: 0, activeDays: 31 }
];

clients.forEach(c => {
  c.pct = c.target > 0 ? Math.round(c.achieved / c.target * 100) : (c.achieved > 0 ? 999 : 0);
  c.avgDay = c.activeDays > 0 ? Math.round(c.achieved / c.activeDays) : 0;
  c.remaining = Math.max((c.target || 0) - c.achieved, 0);
  c.daysNeeded = c.avgDay > 0 && c.remaining > 0 ? parseFloat((c.remaining / c.avgDay).toFixed(1)) : (c.remaining === 0 ? 0 : 999);
});

// EDD crossed by customer (from sheet)
const eddData = [
  { name: 'Bombax', count: 87 },
  { name: 'Carrier Refrigeration', count: 60 },
  { name: 'Sukuga', count: 23 },
  { name: 'Haier CCR', count: 16 },
  { name: 'MITRAS', count: 12 },
  { name: 'Carrier CTD', count: 5 },
  { name: 'Vaidrishi Laboratories', count: 5 },
  { name: 'SCJ', count: 3 },
  { name: 'Medical Science', count: 2 },
  { name: 'Carrier Global', count: 1 },
  { name: 'Loom Solar', count: 1 },
  { name: 'Kumar Services', count: 1 },
  { name: 'Paramount Surgimed', count: 1 },
  { name: 'Indu Sports', count: 1 },
  { name: 'Cosmos Pumps', count: 1 },
];
const eddTotal = eddData.reduce((a, b) => a + b.count, 0);

// Open shipments by customer
const openData = [
  { name: 'Bombax', count: 202 },
  { name: 'Carrier Refrigeration', count: 153 },
  { name: 'Sukuga', count: 39 },
  { name: 'Haier CCR', count: 31 },
  { name: 'Carrier CTD', count: 20 },
  { name: 'MITRAS', count: 13 },
  { name: 'Loom Solar', count: 7 },
  { name: 'Cosmos Pumps', count: 6 },
  { name: 'Vaidrishi Laboratories', count: 5 },
  { name: 'SCJ', count: 3 },
  { name: 'Paramount Surgimed', count: 3 },
  { name: 'Kumar Services', count: 2 },
  { name: 'Medical Science', count: 2 },
  { name: 'Carrier Global', count: 1 },
  { name: 'Indu Sports', count: 1 },
  { name: 'Aurinko Healthcare', count: 1 },
];
const openTotal = openData.reduce((a, b) => a + b.count, 0);

// Due tomorrow by customer
const dueData = [
  { name: 'Carrier Refrigeration', count: 50 },
  { name: 'Bombax', count: 24 },
  { name: 'Sukuga', count: 6 },
  { name: 'Haier CCR', count: 4 },
  { name: 'Carrier CTD', count: 3 },
  { name: 'Loom Solar', count: 2 },
  { name: 'Cosmos Pumps', count: 1 },
  { name: 'Kumar Services', count: 1 },
  { name: 'MITRAS', count: 1 },
];
const dueTotal = dueData.reduce((a, b) => a + b.count, 0);

// Booked yesterday
const bookedData = [
  { name: 'Carrier Refrigeration', count: 71 },
  { name: 'Bombax', count: 24 },
  { name: 'Loom Solar', count: 5 },
  { name: 'Sukuga', count: 2 },
  { name: 'Carrier CTD', count: 1 },
  { name: 'MITRAS', count: 1 },
  { name: 'Cosmos Pumps', count: 1 },
];
const bookedTotal = bookedData.reduce((a, b) => a + b.count, 0);

// Daily tonnage (May 30)
const dailyTonnageData = [
  { name: 'Carrier Refrigeration', kg: 20192 },
  { name: 'Loom Solar', kg: 3400 },
  { name: 'Bombax', kg: 1967 },
  { name: 'Cosmos Pumps', kg: 710 },
  { name: 'Carrier CTD', kg: 710 },
  { name: 'Sukuga', kg: 210 },
  { name: 'MITRAS', kg: 65 },
];
const dailyTotal = dailyTonnageData.reduce((a, b) => a + b.kg, 0);

// Monthly tonnage
const monthlyTotal = clients.reduce((a, c) => a + c.achieved, 0);
const daysInMonth = 31;
const dailyAverage = monthlyTotal / daysInMonth;

// ─── UPDATE KPI CARDS ─────────────────────────────────────────────────────────
document.getElementById('kpi-open').textContent = openTotal;
document.getElementById('kpi-edd').textContent = eddTotal;
document.getElementById('kpi-edd-pct').textContent = Math.round(eddTotal/openTotal*100) + '% of open';
document.getElementById('kpi-due').textContent = dueTotal;
document.getElementById('kpi-booked').textContent = bookedTotal;
document.getElementById('kpi-daily-ton').innerHTML = dailyTotal.toLocaleString('en-IN') + ' <span style="font-size:0.9rem;font-weight:600">kg</span>';
document.getElementById('kpi-month-ton').innerHTML = monthlyTotal.toLocaleString('en-IN') + ' <span style="font-size:0.9rem;font-weight:600">kg</span>';
document.getElementById('kpi-daily-avg').innerHTML =
  dailyAverage.toLocaleString('en-IN', {
    maximumFractionDigits: 0
  }) +
  ' <span style="font-size:0.9rem;font-weight:600">kg/day</span>';

// ─── CHART 1: Status Donut ─────────────────────────────────────────────────────
new Chart(document.getElementById('statusDonut'), {
  type: 'doughnut',
  data: {
    labels: ['EDD Crossed (Delayed)', 'Open (in transit)', 'Due Tomorrow', 'Booked Yesterday'],
    datasets: [{
      data: [eddTotal, openTotal - eddTotal, dueTotal, bookedTotal],
      backgroundColor: ['#ef4444', '#3b82f6', '#f59e0b', '#10b981'],
      borderWidth: 2, borderColor: '#ffffff', hoverOffset: 6
    }]
  },
  options: {
    responsive: true, maintainAspectRatio: false, cutout: '68%',
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: ctx => ` ${ctx.label}: ${ctx.parsed}` } }
    }
  }
});

// ─── CHART 2: EDD Crossed by Customer ────────────────────────────────────────
new Chart(document.getElementById('eddBarChart'), {
  type: 'bar',
  data: {
    labels: eddData.map(d => d.name),
    datasets: [{
      label: 'EDD Crossed',
      data: eddData.map(d => d.count),
      backgroundColor: 'rgba(239,68,68,0.12)',
      borderColor: '#ef4444',
      borderWidth: 1.5, borderRadius: 4
    }]
  },
  options: {
    indexAxis: 'y', responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { beginAtZero: true, ticks: { font: { size: 11 } } },
      y: { ticks: { font: { size: 11, weight: '500' } }, grid: { display: false } }
    }
  }
});

// ─── CHART 3: Due Tomorrow ────────────────────────────────────────────────────
new Chart(document.getElementById('dueTmrChart'), {
  type: 'bar',
  data: {
    labels: dueData.map(d => d.name),
    datasets: [{
      label: 'Due Tomorrow',
      data: dueData.map(d => d.count),
      backgroundColor: 'rgba(245,158,11,0.12)',
      borderColor: '#f59e0b',
      borderWidth: 1.5, borderRadius: 4
    }]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { autoSkip: false, maxRotation: 30, font: { size: 11, weight: '500' } }, grid: { display: false } },
      y: { beginAtZero: true }
    }
  }
});

// ─── CHART 4: Booked Yesterday ────────────────────────────────────────────────
new Chart(document.getElementById('bookedChart'), {
  type: 'bar',
  data: {
    labels: bookedData.map(d => d.name),
    datasets: [{
      label: 'Booked Yesterday',
      data: bookedData.map(d => d.count),
      backgroundColor: 'rgba(16,185,129,0.12)',
      borderColor: '#10b981',
      borderWidth: 1.5, borderRadius: 4
    }]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { autoSkip: false, maxRotation: 30, font: { size: 11, weight: '500' } }, grid: { display: false } },
      y: { beginAtZero: true }
    }
  }
});

// ─── PANEL 2: Tonnage Progress Bars ──────────────────────────────────────────
const barsEl = document.getElementById('tonnage-bars');
const clientsWithTarget = clients.filter(c => c.target > 0).sort((a,b) => b.target - a.target);
clientsWithTarget.forEach(c => {
  const gradient = c.pct >= 100 ? 'linear-gradient(90deg, #059669, #10b981)' : c.pct >= 60 ? 'linear-gradient(90deg, #d97706, #fbbf24)' : 'linear-gradient(90deg, #dc2626, #ef4444)';
  const pctCapped = Math.min(c.pct, 100);
  barsEl.innerHTML += `<div class="client-row">
    <div class="client-name" title="${c.name}">${c.name}</div>
    <div class="client-person">${c.person}</div>
    <div class="prog-bar-wrap">
      <div class="prog-bar" style="width:${pctCapped}%;background:${gradient}"></div>
    </div>
    <div class="pct-text">${c.pct >= 999 ? '∞' : c.pct + '%'}</div>
    <div class="client-tonnage">${(c.achieved/1000).toFixed(1)}T / ${(c.target/1000).toFixed(0)}T</div>
  </div>`;
});

const chartFont = { size: 11, weight: '500' };
const top8 = clientsWithTarget.slice(0, 8);

// ─── CHART 5: Target Distribution ────────────────────────────────────────────
new Chart(document.getElementById('targetChart'), {
  type: 'bar',
  data: {
    labels: top8.map(c => c.name),
    datasets: [{
      label: 'Monthly target (kg)',
      data: top8.map(c => c.target),
      backgroundColor: 'rgba(0,77,245,0.12)', borderColor: '#004df5', borderWidth: 1.5, borderRadius: 4
    }]
  },
  options: {
    indexAxis: 'y', responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { beginAtZero: true, ticks: { callback: v => (v/1000).toFixed(0)+'k', font: chartFont } },
      y: { ticks: { font: chartFont }, grid: { display: false } }
    }
  }
});

// ─── CHART 6: Achieved vs Target ─────────────────────────────────────────────
new Chart(document.getElementById('achChart'), {
  type: 'bar',
  data: {
    labels: top8.map(c => c.name),
    datasets: [
      { label: 'Achieved (kg)', data: top8.map(c => c.achieved), backgroundColor: 'rgba(16,185,129,0.15)', borderColor: '#10b981', borderWidth: 1.5, borderRadius: 4 },
      { label: 'Target (kg)',   data: top8.map(c => c.target),   backgroundColor: 'rgba(71,85,105,0.08)',  borderColor: '#475569', borderWidth: 1.5, borderRadius: 4 }
    ]
  },
  options: {
    indexAxis: 'y', responsive: true, maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, padding: 16, font: chartFont } } },
    scales: {
      x: { beginAtZero: true, ticks: { callback: v => (v/1000).toFixed(0)+'k', font: chartFont } },
      y: { ticks: { font: chartFont }, grid: { display: false } }
    }
  }
});

// ─── PANEL 3: Daily Average Table ─────────────────────────────────────────────
const tbody = document.getElementById('daily-table-body');
clients.filter(c => c.target > 0 || c.achieved > 0).forEach(c => {
  const pctColor = c.pct >= 100 ? '#059669' : c.pct >= 60 ? '#d97706' : '#dc2626';
  const dayColor = c.daysNeeded === 0 ? '#059669' : c.daysNeeded <= 5 ? '#059669' : c.daysNeeded <= 10 ? '#d97706' : '#dc2626';
  const daysText = c.remaining === 0 ? '✓ Done' : c.daysNeeded === 999 ? 'N/A' : c.daysNeeded + ' days';
  const pctDisp = c.pct >= 999 ? '∞%' : c.pct + '%';
  tbody.innerHTML += `<tr>
    <td style="font-weight:600">${c.name}</td>
    <td style="font-size:0.8rem;color:#64748b">${c.person}</td>
    <td>${c.target > 0 ? c.target.toLocaleString('en-IN') : '—'}</td>
    <td>${c.achieved.toLocaleString('en-IN')}</td>
    <td style="color:${pctColor};font-weight:700">${pctDisp}</td>
    <td>${c.activeDays}</td>
    <td>${c.avgDay.toLocaleString('en-IN')}</td>
    <td>${c.remaining > 0 ? c.remaining.toLocaleString('en-IN') : '—'}</td>
    <td style="color:${dayColor};font-weight:700">${daysText}</td>
  </tr>`;
});

// ─── CHART 7: Avg kg/day ──────────────────────────────────────────────────────
const topAvg = clients.filter(c => c.avgDay > 0).sort((a,b) => b.avgDay - a.avgDay).slice(0, 10);
new Chart(document.getElementById('avgDayChart'), {
  type: 'bar',
  data: {
    labels: topAvg.map(c => c.name),
    datasets: [{ label: 'Avg kg/day', data: topAvg.map(c => c.avgDay), backgroundColor: 'rgba(99,102,241,0.12)', borderColor: '#6366f1', borderWidth: 1.5, borderRadius: 4 }]
  },
  options: {
    indexAxis: 'y', responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { beginAtZero: true, ticks: { callback: v => v.toLocaleString('en-IN'), font: chartFont } },
      y: { ticks: { font: chartFont }, grid: { display: false } }
    }
  }
});

// ─── CHART 8: Days to Complete ────────────────────────────────────────────────
const daysFiltered = clients.filter(c => c.target > 0 && c.remaining > 0 && c.daysNeeded < 999);
const daysColors  = daysFiltered.map(c => c.daysNeeded <= 3 ? 'rgba(16,185,129,0.15)' : c.daysNeeded <= 10 ? 'rgba(245,158,11,0.15)' : 'rgba(239,68,68,0.15)');
const daysBorders = daysFiltered.map(c => c.daysNeeded <= 3 ? '#10b981' : c.daysNeeded <= 10 ? '#f59e0b' : '#ef4444');
new Chart(document.getElementById('daysChart'), {
  type: 'bar',
  data: {
    labels: daysFiltered.map(c => c.name),
    datasets: [{ label: 'Days to complete', data: daysFiltered.map(c => c.daysNeeded), backgroundColor: daysColors, borderColor: daysBorders, borderWidth: 1.5, borderRadius: 4 }]
  },
  options: {
    indexAxis: 'y', responsive: true, maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: ctx => ` ${ctx.parsed.x} days needed` } }
    },
    scales: {
      x: { beginAtZero: true, ticks: { font: chartFont } },
      y: { ticks: { font: chartFont }, grid: { display: false } }
    }
  }
});

// ─── PANEL 4: KAM-wise breakdown ──────────────────────────────────────────────
const kamMap = {};
clients.filter(c => c.target > 0 || c.achieved > 0).forEach(c => {
  if (!kamMap[c.person]) kamMap[c.person] = { person: c.person, totalTarget: 0, totalAchieved: 0, clients: [] };
  kamMap[c.person].totalTarget += c.target;
  kamMap[c.person].totalAchieved += c.achieved;
  kamMap[c.person].clients.push(c);
});
const kamList = Object.values(kamMap).sort((a,b) => b.totalAchieved - a.totalAchieved);

const kamTbody = document.getElementById('kam-table-body');
kamList.forEach(k => {
  const pct = k.totalTarget > 0 ? Math.round(k.totalAchieved/k.totalTarget*100) : 0;
  const color = pct >= 80 ? '#059669' : pct >= 50 ? '#d97706' : '#dc2626';
  const gradient = pct >= 80 ? 'linear-gradient(90deg,#059669,#10b981)' : pct >= 50 ? 'linear-gradient(90deg,#d97706,#fbbf24)' : 'linear-gradient(90deg,#dc2626,#ef4444)';
  kamTbody.innerHTML += `<tr>
    <td style="font-weight:700">${k.person}</td>
    <td>${k.clients.length}</td>
    <td>${k.totalTarget.toLocaleString('en-IN')}</td>
    <td>${k.totalAchieved.toLocaleString('en-IN')}</td>
    <td style="color:${color};font-weight:700">${pct}%</td>
    <td>
      <div style="background:#e2e8f0;border-radius:99px;height:8px;overflow:hidden;width:120px">
        <div style="height:100%;border-radius:99px;width:${Math.min(pct,100)}%;background:${gradient}"></div>
      </div>
    </td>
  </tr>`;
});

// KAM Donut
new Chart(document.getElementById('kamDonut'), {
  type: 'doughnut',
  data: {
    labels: kamList.map(k => k.person),
    datasets: [{
      data: kamList.map(k => k.totalAchieved),
      backgroundColor: ['#004df5','#10b981','#f59e0b','#ef4444','#6366f1','#ec4899'],
      borderWidth: 2, borderColor: '#fff', hoverOffset: 6
    }]
  },
  options: {
    responsive: true, maintainAspectRatio: false, cutout: '62%',
    plugins: {
      legend: { position: 'bottom', labels: { boxWidth: 12, padding: 12, font: { size: 11 } } },
      tooltip: { callbacks: { label: ctx => ` ${ctx.label}: ${(ctx.parsed/1000).toFixed(1)}T` } }
    }
  }
});

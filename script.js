// Данные для графиков и таблицы
const activityData = {
    labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00'],
    datasets: [
        { label: 'Активные', data: [18, 15, 23, 37, 42, 45, 40, 30, 25], borderColor: '#3b82f6', fill: true },
        { label: 'Завершенные', data: [0, 4, 7, 12, 18, 24, 29, 33, 38], borderColor: '#10b981', fill: true }
    ]
};

const regionData = {
    labels: ['Северо-восток', 'Юго-восток', 'Средний запад', 'Юго-запад', 'Запад'],
    datasets: [{ data: [25, 15, 20, 18, 22], backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'] }]
};

const revenueData = {
    labels: ['Электроника', 'Продукты', 'Автозапчасти', 'Мебель', 'Прочее'],
    datasets: [{ data: [12500, 8700, 7200, 6800, 4300], backgroundColor: '#3b82f6' }]
};

const shipments = [
    { id: 'SH-89042', route: 'Chicago → Dallas', status: 'In Transit' },
    { id: 'SH-89123', route: 'New York → Miami', status: 'Loading' },
    { id: 'SH-89256', route: 'Los Angeles → Phoenix', status: 'In Transit' }
];

// Переключение вкладок
function setActiveTab(tab) {
    ['dashboard', 'shipments', 'analytics'].forEach(t => document.getElementById(t).classList.add('hidden'));
    document.getElementById(tab).classList.remove('hidden');
}

// Инициализация графиков
function initCharts() {
    new Chart(document.getElementById('activityChart'), {
        type: 'line',
        data: activityData,
        options: { scales: { y: { beginAtZero: true } } }
    });

    new Chart(document.getElementById('regionChart'), {
        type: 'pie',
        data: regionData,
        options: { responsive: true }
    });

    new Chart(document.getElementById('revenueChart'), {
        type: 'bar',
        data: revenueData,
        options: { scales: { y: { beginAtZero: true } } }
    });
}

// Заполнение таблицы shipments
function initShipments() {
    const tableBody = document.getElementById('shipmentsTable');
    shipments.forEach(shipment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">${shipment.id}</td>
            <td class="px-6 py-4 whitespace-nowrap">${shipment.route}</td>
            <td class="px-6 py-4 whitespace-nowrap"><span class="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">${shipment.status}</span></td>
        `;
        tableBody.appendChild(row);
    });
}

// Уведомление через 3 секунды
setTimeout(() => alert('Новое уведомление: Заявка на перевозку!'), 3000);

// Темный режим
document.querySelector('.dark-mode-button').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    setActiveTab('dashboard');
    initCharts();
    initShipments();
});
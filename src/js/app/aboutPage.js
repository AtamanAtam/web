import { loadEmployees } from '../api/employees.js';
import { renderEmployeeCard } from '../ui/employeeCard.js';

export async function initAbout() {
    const list = document.querySelector('.team__list');
    const tpl = document.getElementById('employee-card-tpl');

    // Если мы не на странице about.html — выходим
    if (!list || !tpl) return () => {};

    const controller = new AbortController();

    try {
        const employees = await loadEmployees(6, { signal: controller.signal });
        const frag = document.createDocumentFragment();

        employees.forEach(emp => {
            frag.append(renderEmployeeCard(tpl, emp));
        });

        list.innerHTML = '';
        list.append(frag);
    } catch (err) {
        if (err.name !== 'AbortError') {
            console.error('Ошибка загрузки сотрудников:', err);
        }
    }

    return () => controller.abort();
}
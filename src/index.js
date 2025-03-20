import './style.css';
import 'flowbite/dist/flowbite.js';
import './sidebar';
import './charts';
import './dark-mode';

// Have the courage to follow your heart and intuition.


if (document.getElementById("default-table") && typeof simpleDatatables.DataTable !== 'undefined') {
    const dataTable = new simpleDatatables.DataTable("#default-table", {
        searchable: false,
        perPageSelect: false
    });
}

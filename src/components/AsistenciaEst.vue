<template >
    <h1><font-awesome-icon :icon="['fas', 'chart-area']" /> Asistencia</h1>



    <div class="card-container">
        <div class="card">
            <div class="card-header"><font-awesome-icon :icon="['fas', 'chart-column']" /> Asistencia por eventos</div>
            <div class="card-body" v-if="actividades.length > 0">

                <div class="export-buttons">
                    <button class="btn btn-danger" @click="exportToPDF">
                        <font-awesome-icon :icon="['fas', 'file-pdf']" /> Exportar a PDF
                    </button>
                    <button class="btn btn-primary" @click="exportToCsv">
                        <font-awesome-icon :icon="['fas', 'file-csv']" /> Exportar a CSV
                    </button>
                    <button class="btn btn-success" @click="exportToExcel(actividades)">
                        <font-awesome-icon :icon="['fas', 'file-excel']" /> Exportar a Excel
                    </button>
                </div>

                <DataTable :data="actividades" :columns="filasac"
                    :options="{ language: { search: 'Buscar', next: 'Siguiente', Previous: 'anterior', }, dom: 'Bfrtip', responsive: true }"
                    class="display">
                    <thead>
                        <tr>
                            <th> scope</th>
                            <th>Estudiante</th>
                            <th>Código</th>
                            <th>Documento</th>
                            <th>Correo</th>
                            <th>Evento</th>
                            <th>Fecha</th>
                            <th>Horas registradas</th>

                        </tr>
                    </thead>
                </DataTable>

            </div>
        </div>

        <div class="card">
            <div class="card-header"><font-awesome-icon :icon="['fas', 'chart-column']" /> Asistencia por actividades</div>
            <div class="card-body" v-if="eventos.length > 0">

                <div class="export-buttons">
                    <button class="btn btn-danger" @click="exportToPDF">
                        <font-awesome-icon :icon="['fas', 'file-pdf']" /> Exportar a PDF
                    </button>
                    <button class="btn btn-primary" @click="exportToCsv">
                        <font-awesome-icon :icon="['fas', 'file-csv']" /> Exportar a CSV
                    </button>
                    <button class="btn btn-success" @click="exportToExcel(eventos)">
                        <font-awesome-icon :icon="['fas', 'file-excel']" /> Exportar a Excel
                    </button>
                </div>

                <DataTable :data="eventos" :columns="filasEv"
                    :options="{ language: { search: 'Buscar', next: 'Siguiente', Previous: 'anterior', }, dom: 'Bfrtip', responsive: true }"
                    class="display">
                    <thead>
                        <tr>
                            <th> scope</th>
                            <th>Estudiante</th>
                            <th>Código</th>
                            <th>Documento</th>
                            <th>Correo</th>
                            <th>Actividad</th>
                            <th>Fecha</th>
                            <th>Horas registradas</th>

                        </tr>
                    </thead>
                </DataTable>

            </div>
        </div>

    </div>
</template>
    
<script>

import axios from 'axios';
import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net';
import Buttons from 'datatables.net-buttons';
import  * as XLSX from 'xlsx';

DataTable.use(DataTablesLib);
DataTable.use(Buttons);

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    components: {

        DataTable

    },
    data: function () {
        return {
            actividades: [],
            filasac: [
                {
                    data: null, render: function (data, type, row, meta) {
                        return `${meta.row}`
                    }
                }, { data: 'estudiante' }, { data: 'id' }, { data: 'documento' }, { data: 'email' }, { data: 'evento' }, { data: 'fecha' }, { data: 'horas_registradas' }

            ],
            eventos: [],
            filasEv: [
                {
                    data: null, render: function (data, type, row, meta) {
                        return `${meta.row}`
                    }
                }, { data: 'estudiante' }, { data: 'id' }, { data: 'documento' }, { data: 'email' }, { data: 'actividad' }, { data: 'fecha' }, { data: 'horas_registradas' }

            ],

        }
    },
    mounted: function () {
        this.getEventos()
        this.getActividades()

        //console.log(axios.get('http://127.0.0.1:8000/api/asistenciaEventos').then(response => this.eventos = response.data).catch(error => console.log(error)));
        console.log(this.getEventos)
    },
    methods: {
        getEventos() {
            axios.get('http://127.0.0.1:8000/api/totalAsistenciaEv/').then(
                response => (
                    this.actividades = response.data
                )
            )
        },
        getActividades() {
            axios.get('http://127.0.0.1:8000/api/totalAsistenciaAct').then(
                response => (
                    this.eventos = response.data
                )
            )
        },
        exportToExcel(datos) {
      // Obtiene los datos que quieres exportar
      const data = datos;

      // Crea un libro de trabajo y agrega una hoja de cálculo
      const workbook = XLSX.utils.book_new();
      const sheet = XLSX.utils.json_to_sheet(data);

      // Agrega la hoja de cálculo al libro de trabajo
      XLSX.utils.book_append_sheet(workbook, sheet, 'Mi Hoja de Cálculo');

      // Crea un objeto Blob para el archivo Excel
      const blob = new Blob([XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });

      // Crea un objeto URL para descargar el archivo Excel
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'mi_archivo.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    }
}

</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-container {
    align-items: center;
    display: flex;
    flex-direction: column;

}

.card {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    margin-right: 10px;
    width: 100%;
}

.card-header {
    background-color: #f2f2f2;
    font-weight: bold;
    padding: 10px;
}

.card-body {
    padding: 10px;
    margin-bottom: 5%;
}

.export-buttons {
    display: flex;


}

button {
    margin: 1px;
}
</style>
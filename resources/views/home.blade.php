@extends('layouts.app') @section('content') <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>
                
                <div class="container" style="width: 40%; margin: 10px auto">
                    <label for="searchDate">Seleccione la Fecha a Consultar</label>
                    <input class="form-control" type="date" id="searchDate" name="searchDate" size="20">
                </div>
                <hr>

                <div class="container" style="width: 40%">
                    <h3>Informe de Entradas/Salidas por Hora</h3>
                    <canvas id="myChartHour" width="600" 
height="400"></canvas>
                </div>
                <div class="container" style="width: 40%">
                    <h3>Informe de Entradas/Salidas por Dia</h3>
                    <canvas id="myChartDiario" width="600" 
height="400"></canvas>
                </div>
                <hr>
                <div class="container" style="width: 40%">
                    <h3>Entradas/Salidas por Semana</h3>
                    <canvas id="myChartSemanal" width="600" 
height="400"></canvas>
                </div>
                <hr>
                <div class="container" style="width: 40%">
                    <h3>Entradas/Salidas por Mes</h3>
                    <canvas id="myChart" width="600" 
height="400"></canvas>
                </div>
            </div>
        </div>
    </div> </div>
@endsection

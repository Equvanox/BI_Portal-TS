<template>
    <div class="responsive-table">
        <h3>Key Performance Indicators</h3>
        <div class="table-row">
            <div class="table-cell" id="cell-1-1">
                <div class="title">Bookings Value</div>
                <div class="Bookings_BS"></div>
            </div>
            <div class="table-cell" id="cell-1-2">
                <div class="title">Pacing PY Value</div>
                <div class="PacingPY_BS"></div>
            </div>
            <div class="table-cell" id="cell-1-3">
                <div class="title">Budget Value</div>
                <div class="Budget_BS"></div>
            </div>
            <div class="table-cell" id="cell-1-4">
                <div class="title">Estimate Value</div>
                <div class="Estimate_BS"></div>
            </div>
            <div class="table-cell" id="cell-1-5">
                <div class="title">Added Last 1 Day</div>
                <div class="TotalAddedLast1_BS"></div>
            </div>
            <div class="table-cell" id="cell-1-6">
                <div class="title">Vs Pacing PY Value</div>
                <div class="VsPacingPY_BS"></div>
            </div>
            <div class="table-cell" id="cell-1-7">
                <div class="title">% To Budget Value</div>
                <div class="ToBudget_BS"></div>
            </div>
        </div>
        <div class="table-row">
            <div class="table-cell" id="cell-2-1">
                <div class="title">% To Estimate Value</div>
                <div class="ToEstimat_BS"></div>
            </div>
            <div class="table-cell" id="cell-2-2">
                <div class="title">Added Last 7 Days</div>
                <div class="AddedLast7Days_BS"></div>
            </div>
            <div class="table-cell" id="cell-2-3">
                <div class="title">Pacing Projection</div>
                <div class="PacingProjection_BS"></div>
            </div>
            <div class="table-cell" id="cell-2-4">
                <div class="title">Budget Variance</div>
                <div class="BudgetVariance_BS"></div>
            </div>
            <div class="table-cell" id="cell-2-5">
                <div class="title">Estimate Variance</div>
                <div class="EstimateVariance_BS"></div>
            </div>
            <div class="table-cell" id="cell-2-6">
                <div class="title">Added To Final PY</div>
                <div class="AddedToFinalPy_BS"></div>
            </div>
            <div class="table-cell" id="cell-2-7">
                <div class="title">Final PY Value</div>
                <div class="FinalPy_BS"></div>
            </div>
        </div>
    </div>
</template>

<script>
import '@/styles/HomePageStyle.css';
export default {};
</script>

<style>
    .responsive-table {
        display: table;
        width: 100%;
        border-collapse: collapse;
    }
    .table-row {
        display: table-row;
    }
    .table-cell {
        display: table-cell;
        padding: 10px;
        border: 1px solid #ddd;
        text-align: center;
        vertical-align: top;
    }
    .title {
        font-weight: bold;
        margin-bottom: 5px;
    }
    .data {
        color: #555;
    }
</style>
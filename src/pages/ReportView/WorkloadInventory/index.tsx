import { connect } from 'react-redux';
import WorkloadInventory from './WorkloadInventory';
import { GlobalState } from '../../../models/state';
import * as reportActions from '../../../actions/ReportActions';

const mapStateToProps = (state: GlobalState) => {
    const {
        reportWorkloadInventory,
        reportWorkloadInventoryFetchStatus,
        reportWorkloadInventoryAllCSVFetchStatus,
        reportWorkloadInventoryFilteredCSVFetchStatus,
        reportWorkloadInventoryAvailableFilters,
        reportWorkloadInventoryAvailableFiltersFetchStatus
    } = state.reportState;
    return {
        reportWorkloadInventory,
        reportWorkloadInventoryFetchStatus,
        reportWorkloadInventoryAllCSVFetchStatus,
        reportWorkloadInventoryFilteredCSVFetchStatus,
        reportWorkloadInventoryAvailableFilters,
        reportWorkloadInventoryAvailableFiltersFetchStatus
    };
};

const mapDispatchToProps = {
    fetchReportWorkloadInventory: reportActions.fetchReportWorkloadInventory,
    fetchReportWorkloadInventoryAllCSV: reportActions.fetchReportWorkloadInventoryAllCSV,
    fetchReportWorkloadInventoryFilteredCSV: reportActions.fetchReportWorkloadInventoryFilteredCSV,
    fetchReportWorkloadInventoryAvailableFilters: reportActions.fetchReportWorkloadInventoryAvailableFilters
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkloadInventory);

import React, { Component, Fragment } from 'react';
import { withAITracking } from '@microsoft/applicationinsights-react-js';
import { withRouter } from 'react-router-dom';
import { ai } from '../utils/telemetry-service';

/**
 * This Component provides telemetry with Azure App Insights
 *
 * NOTE: the package '@microsoft/applicationinsights-react-js' has a HOC withAITracking that requires this to be a Class Component rather than a Functional Component
 */
class TelemetryProvider extends Component<any, any> {
    state = {
        initialized: false
    };

    componentDidMount() {
        const { history } = this.props;
        const { initialized } = this.state;
        const AppInsightsInstrumentationKey = this.props.instrumentationKey;
        if (!Boolean(initialized) && Boolean(AppInsightsInstrumentationKey) && Boolean(history)) {
            ai.initialize(AppInsightsInstrumentationKey, history);
            this.setState({ initialized: true });
        }

        this.props.after();
    }

    render() {
        const { children } = this.props;
        return (
            <Fragment>
                {children}
            </Fragment>
        );
    }
}

export default withRouter(withAITracking(ai.reactPlugin, TelemetryProvider));
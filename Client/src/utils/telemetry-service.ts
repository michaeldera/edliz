import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';

let reactPlugin: ReactPlugin;
let appInsights: ApplicationInsights;

const createTelemetryService = (): {reactPlugin: ReactPlugin, appInsights: Object, initialize: Function} => {
    const initialize = (instrumentationKey: string, browserHistory: Object): void => {
        if (!browserHistory) {
            throw new Error('Could not initialize Telemetry Service');
        }
        if (!instrumentationKey) {
            throw new Error('Instrumentation key not provided in ./src/telemetry-provider.jsx')
        }

        reactPlugin = new ReactPlugin();

        appInsights = new ApplicationInsights({
            config: {
                instrumentationKey: instrumentationKey,
                maxBatchInterval: 0,
                disableFetchTracking: false,
                extensions: [reactPlugin],
                extensionConfig: {
                    [reactPlugin.identifier]: {
                        history: browserHistory
                    }
                }
            }
        });

        appInsights.loadAppInsights();
    };

    return { reactPlugin, appInsights, initialize };
};

export const ai = createTelemetryService();
export const getAppInsights = () => appInsights;
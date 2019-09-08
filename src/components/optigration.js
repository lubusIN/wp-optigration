/***
 * Internal dependencies.
 */
import OptigrationProvider from "../data/context";
import ErrorBoundry from './error-boundry';
import PageTitle from './page-title';
import Settings from './settings';

/**
 * Render Optigration Component.
 */
const Optigration = () => {
	return(
		<ErrorBoundry>
			<OptigrationProvider>
				<PageTitle/>
				<Settings/>
			</OptigrationProvider>
		</ErrorBoundry>
	);
};

export default Optigration;

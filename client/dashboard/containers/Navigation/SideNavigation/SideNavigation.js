import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionFeedback from 'material-ui/svg-icons/action/feedback';
import ArrowLeft from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Divider from 'material-ui/Divider';

import styles from './SideNavigation.scss';

const CompanyProfile = () => {
	return (
		<div className={styles.CompanyProfile}>
		</div>
	);
};

class SideNavigation extends React.Component {
	render() {
		return (
			<Drawer open={this.props.openDrawer} containerStyle={this.props.containerStyle}>
				<div className={styles.SideNavigation}>
					<CompanyProfile />
					<div className={styles.MenuWrapper}>
						<MenuItem primaryText='Dashboard' leftIcon={<ActionDashboard />} rightIcon={<ArrowLeft />} />
						<MenuItem primaryText='Submissions' leftIcon={<ActionSettings />} rightIcon={<ArrowLeft />} />
						<MenuItem primaryText='Settings' leftIcon={<ActionFeedback />} rightIcon={<ArrowLeft />} />
					</div>
					<Divider />
					<div className={styles.Footer}>
						<span><strong>SummerSix &copy;</strong></span>
					</div>
				</div>
			</Drawer>
		);
	}
}

SideNavigation.propTypes = {
	openDrawer: PropTypes.bool,
	containerStyle: PropTypes.object
};

export default SideNavigation;
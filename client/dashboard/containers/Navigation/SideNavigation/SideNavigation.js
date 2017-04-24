import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionFeedback from 'material-ui/svg-icons/action/feedback';
import ArrowLeft from 'material-ui/svg-icons/navigation-arrow-drop-right';
import ActionStore from 'material-ui/svg-icons/action/store';
import Divider from 'material-ui/Divider';
import ActionSubject from 'material-ui/svg-icons/action/subject';
import { List, ListItem, makeSelectable } from 'material-ui/List';

import styles from './SideNavigation.scss';

const CompanyProfile = () => {
	return (
		<div className={styles.CompanyProfile}>
		</div>
	);
};

class SideNavigation extends React.Component {
	constructor() {
		super();

		this.onClickListItem = this.onClickListItem.bind(this);
	}

	onClickListItem(event, value) {
		this.props.router.push(value);
		this.forceUpdate(); // force render to update drawer on location change
	}

	render() {
		const { containerStyle, openDrawer, router } = this.props;
		const SelectableList = makeSelectable(List);
		return (
			<Drawer open={openDrawer} containerStyle={containerStyle} style={{ zIndex: '2000' }}>
				<div className={styles.SideNavigation}>
					<CompanyProfile />
					<SelectableList className={styles.MenuWrapper} onChange={this.onClickListItem} value={router.location.pathname}>
						<ListItem checked={true} primaryText='Dashboard' leftIcon={<ActionDashboard />} rightIcon={<ArrowLeft />} value='/dashboard' />
						<ListItem primaryText='Feedbacks' leftIcon={<ActionFeedback />} rightIcon={<ArrowLeft />} value='/dashboard/feedbacks' />
						<ListItem primaryText='Settings' leftIcon={<ActionSettings />} primaryTogglesNestedList={true}
							nestedItems={[
								<ListItem primaryText='Company' leftIcon={<ActionStore />} value='/dashboard/settings/company' />,
								<ListItem primaryText='Form' leftIcon={<ActionSubject />} value='/gripe' />
							]}
						/>
					</SelectableList>
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

// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, Menu, Icon } from 'antd';
import * as navActions from '../../actions';
import type { Action } from '../../types/actions';
import type { StoreState } from '../../types/reducers';
import type { Element } from 'react';

type StateProps = { tab: string };

type DispatchProps = { getNextTab: (string) => void };

type State = { collapsed: boolean };

type Props = StateProps & DispatchProps;

type NavListObject = { key: string, icon: string, text: string };

export class Sidebar extends React.Component<Props, State> {
	navList: Array<NavListObject> = [
		{ key: 'list', icon: 'desktop', text: 'Crypto List' },
		{ key: 'marketBTC', icon: 'area-chart', text: 'BTC Market' },
		{ key: 'marketETH', icon: 'area-chart', text: 'ETH Market' }
	];
	state = { collapsed: false };

	onCollapse = (collapsed: boolean): void => this.setState({ collapsed });

	onChangeTab = (type: string): Function => (): void => this.props.getNextTab(type);

	render() {
		return (
			<Layout.Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
				<Menu theme="dark" defaultSelectedKeys={[this.props.tab]} mode="inline">
					{ this.navList.map((nav: NavListObject): Element<any> => {
						return (
							<Menu.Item key={nav.key} onClick={this.onChangeTab(nav.key)}>
								<Icon type={nav.icon}/><span>{nav.text}</span>
							</Menu.Item>
						);
					})
				}
				</Menu>
			</Layout.Sider>
		);
	}
}

function mapStateToProps(state: StoreState): StateProps {
	return { tab: state.app.navigation.tab }
}

function mapDispatchToProps(dispatch: Action => void): DispatchProps {
	return bindActionCreators({ ...navActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

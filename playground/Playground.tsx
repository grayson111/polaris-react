import * as React from 'react';
import {noop} from '@shopify/javascript-utilities/other';
import {TopBar, AppProvider, Navigation} from '@shopify/polaris';

interface State {}

export default class Playground extends React.Component<never, State> {
  render() {
    const searchField = (
      <TopBar.SearchField onChange={noop} value="" placeholder="Search" />
    );
    const userMenu = (
      <TopBar.UserMenu
        actions={[
          {
            items: [{content: 'item content'}],
          },
        ]}
        message={{
          title: 'Polaris',
          description: 'description',
          action: {onClick: noop, content: 'action content'},
          link: {to: '/', content: 'Link content'},
        }}
        name="Jakob Stecher"
        initials="DR"
        open={false}
        onToggle={noop}
      />
    );
    return (
      <AppProvider
        theme={{
          logo: {
            topBarSource: './shopify-logo.png',
            width: 24,
          },
        }}
      >
        <div>
          <TopBar
            showNavigationToggle
            searchField={searchField}
            userMenu={userMenu}
          />
          <Navigation location="/" userMenu={<div />}>
            <Navigation.Section
              items={[
                {
                  url: '/',
                  label: 'Products',
                  icon: 'view',
                  disabled: false,
                },
              ]}
            />
          </Navigation>
        </div>
      </AppProvider>
    );
  }
}

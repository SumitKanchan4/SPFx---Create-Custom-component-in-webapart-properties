import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'DemoCustomPropertyWebPartStrings';
import DemoCustomProperty from './components/DemoCustomProperty';
import { IDemoCustomPropertyProps } from './components/IDemoCustomPropertyProps';

export interface IDemoCustomPropertyWebPartProps {
  description: string;
}

export default class DemoCustomPropertyWebPart extends BaseClientSideWebPart<IDemoCustomPropertyWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDemoCustomPropertyProps > = React.createElement(
      DemoCustomProperty,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

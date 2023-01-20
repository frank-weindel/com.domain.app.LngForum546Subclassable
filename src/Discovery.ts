import { Lightning } from '@lightningjs/sdk'
import { IPageTemplateSpec, Page } from './Page'

class List extends Lightning.Component {
  listSpecificProperty = true
}

export class Discovery extends Page<typeof List> {
  static override _template(): Lightning.Component.Template<IPageTemplateSpec<typeof List>> {
    // Must assert the specific template type to the type of the template spec
    // because `super._template()` isn't/can't be aware of List
    const pageTemplate = super._template() as Lightning.Component.Template<
      IPageTemplateSpec<typeof List>
    >

    pageTemplate.Content = {
      type: List,
    }

    return pageTemplate
  }

  override _init() {
    this.Content.listSpecificProperty = true
  }
}

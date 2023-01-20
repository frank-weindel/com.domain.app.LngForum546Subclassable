import { Lightning } from '@lightningjs/sdk'

class Header extends Lightning.Component {}

export interface IPageTemplateSpec<
  T extends Lightning.Component.Constructor = Lightning.Component.Constructor,
> extends Lightning.Component.TemplateSpec {
  Header: typeof Header
  Content: T
}

export interface IPageTypeConfig extends Lightning.Component.TypeConfig {
  IsPage: true
}

export class Page<T extends Lightning.Component.Constructor = Lightning.Component.Constructor>
  extends Lightning.Component<IPageTemplateSpec<T>, IPageTypeConfig>
  implements Lightning.Component.ImplementTemplateSpec<IPageTemplateSpec<T>>
{
  static override _template(): Lightning.Component.Template<IPageTemplateSpec> {
    return {
      w: (w: number) => w,
      h: (h: number) => h,
      rect: true,
      color: 0xff0e0e0e,

      Header: {
        type: Header,
      },
      Content: undefined,
    }
  }

  // `tag()` works but `this.getByRef()` doesn't for some reason !!!
  protected Content = this.tag('Content')!
}


export default [{
    path: '',
    redirect: {
        name: 'Quickstart'
    }
},{
    path: 'quickstart',
    name: 'Quickstart',
    component: () => import('./quickstart/quickstart')
},{
    path: 'button',
    name: 'Button',
    component: () => import('./button/button')
},{
    path: 'radio',
    name: 'Radio',
    component: () => import('./radio/radio')
},{
    path: 'input',
    name: 'Input',
    component: () => import('./input/input')
},{
    path: 'checkbox',
    name: 'Checkbox',
    component: () => import('./checkbox/checkbox')
},{
    path: 'grid',
    name: 'Grid',
    component: () => import('./grid/grid')
},{
    path: 'card',
    name: 'Card',
    component: () => import('./card/card')
},{
    path: 'tabs',
    name: 'Tabs',
    component: () => import('./tabs/tabs')
},{
    path: 'modal',
    name: 'Modal',
    component: () => import('./modal/modal')
},{
    path: 'alert',
    name: 'Alert',
    component: () => import('./alert/alert')
},{
    path: 'affix',
    name: 'Affix',
    component: () => import('./affix/affix')
},{
    path: 'breadcrumb',
    name: 'Breadcrumb',
    component: () => import('./breadcrumb/breadcrumb')
},{
    path: 'steps',
    name: 'Steps',
    component: () => import('./steps/steps')
},{
    path: 'pagination',
    name: 'Pagination',
    component: () => import('./pagination/pagination')
},{
    path: 'input-number',
    name: 'InputNumber',
    component: () => import('./input-number/input-number')
},{
    path: 'switch',
    name: 'Switch',
    component: () => import('./switch/switch')
},{
    path: 'time-picker',
    name: 'TimePicker',
    component: () => import('./time-picker/time-picker')
},{
  path: 'tag',
  name: 'Tag',
  component: () => import('./tag/tag')
},{
  path: 'date-picker',
  name: 'DatePicker',
  component: () => import('./date-picker/date-picker')
},{
  path: 'rate',
  name: 'Rate',
  component: () => import('./rate/rate')
},{
  path: 'slider',
  name: 'Slider',
  component: () => import('./slider/slider')
},{
  path: 'color-picker',
  name: 'ColorPicker',
  component: () => import('./color-picker/color-picker')
},{
  path: 'select',
  name: 'Select',
  component: () => import('./select/select')
},{
  path: 'dropdown',
  name: 'Dropdown',
  component: () => import('./dropdown/dropdown')
},{
  path: 'menu',
  name: 'Menu',
  component: () => import('./menu/menu')
},{
  path: 'message',
  name: 'Message',
  component: () => import('./message/message')
},{
  path: 'avatar',
  name: 'Avatar',
  component: () => import('./avatar/avatar')
},{
  path: 'badge',
  name: 'Badge',
  component: () => import('./badge/badge')
},{
  path: 'form',
  name: 'Form',
  component: () => import('./form/form')
},{
    path: 'transfer',
    name: 'Transfer',
    component: () => import('./transfer/transfer')
},{
  path: 'tree',
  name: 'Tree',
  component: () => import('./tree/tree')
},{
  path: 'anchor',
  name: 'Anchor',
  component: () => import('./anchor/anchor')
},{
  path: 'upload',
  name: 'Upload',
  component: () => import('./upload/upload')
},{
  path: 'progress',
  name: 'Progress',
  component: () => import('./progress/progress')
},{
  path: 'table',
  name: 'Table',
  component: () => import('./table/table')
}]
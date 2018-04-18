import 'plugins/clock_vis/clock_vis.less'
import 'plugins/clock_vis/clock_vis_controller'
import { VisFactoryProvider } from 'ui/vis/vis_factory'
import { CATEGORY } from 'ui/vis/vis_category'
import clockVisTemplate from 'plugins/clock_vis/clock_vis.html'
import clockVisParamsTemplate from 'plugins/clock_vis/clock_vis_params.html'
import { VisTypesRegistryProvider } from 'ui/registry/vis_types'

VisTypesRegistryProvider.register(ClockVisProvider)

function ClockVisProvider(Private) {
  const VisFactory = Private(VisFactoryProvider)

  return VisFactory.createAngularVisualization({
    name: 'clock_vis',
    title: 'Clock',
    isAccessible: true,
    icon: 'fa-clock-o',
    description: 'Add a digital clock to your dashboards',
    category: CATEGORY.OTHER,
    visConfig: {
      template: clockVisTemplate,
      defaults: {
        format: 'HH:mm:ss',
        fontSize: 12
      }
    },
    editorConfig: {
      optionsTemplate: clockVisParamsTemplate
    },
    requestHandler: 'none',
    responseHandler: 'none'
  })
}

export default ClockVisProvider

import { uiModules } from 'ui/modules'

const module = uiModules.get('clock_vis')
module.controller('ClockVisController', ($scope, $timeout) => {
  const setTime = () => {
    $scope.time = Date.now()
    $timeout(setTime, 1000)
  }
  setTime()
})

(function() {
	'use strict';
	/**
	 * app.jobScheduling Module
	 *
	 * 员工排班
	 */
	angular.module('app.jobScheduling').controller('JobSchedulingCtrl', JobSchedulingCtrl);
	JobSchedulingCtrl.$inject = ['$scope', '$state', '$compile', 'uiCalendarConfig', '$mdDialog', 'JobSchedulingService'];

	function JobSchedulingCtrl($scope, $state, $compile, uiCalendarConfig, $mdDialog, JobSchedulingService) {
		var vm = this;
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();

		$scope.startTime = '8:00';
		$scope.endTime = '8:00';

		/* event source that pulls from google.com */
		$scope.eventSource = {
			url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
			className: 'gcal-event', // an option!
			currentTimezone: 'Asia/Shanghai' // an option!
		};
		/* event source that contains custom events on the scope */
		$scope.events = [{
			title: 'All Day Event',
			start: new Date(y, m, 1)
		}, {
			title: 'Long Event',
			start: new Date(y, m, d - 5),
			end: new Date(y, m, d - 2)
		}, {
			id: 999,
			title: 'Repeating Event',
			start: new Date(y, m, d - 3, 16, 0),
			allDay: false
		}, {
			id: 999,
			title: 'Repeating Event',
			start: new Date(y, m, d + 4, 16, 0),
			allDay: false
		}, {
			title: 'Birthday Party',
			start: new Date(y, m, d + 1, 19, 0),
			end: new Date(y, m, d + 1, 22, 30),
			allDay: false
		}, {
			title: 'Click for Google',
			start: new Date(y, m, 28),
			end: new Date(y, m, 29),
			url: 'http://google.com/'
		}];
		/* event source that calls a function on every view switch */
		$scope.eventsF = function(start, end, timezone, callback) {
			var s = new Date(start).getTime() / 1000;
			var e = new Date(end).getTime() / 1000;
			var m = new Date(start).getMonth();
			var events = [{
				title: 'Feed Me ' + m,
				start: s + (50000),
				end: s + (100000),
				allDay: false,
				className: ['customFeed']
			}];
			callback(events);
		};
		$scope.calEventsExt = {
			color: '#f00',
			textColor: 'yellow',
			events: [{
				type: 'party',
				title: 'Lunch',
				start: new Date(y, m, d, 12, 0),
				end: new Date(y, m, d, 14, 0),
				allDay: false
			}, {
				type: 'party',
				title: 'Lunch 2',
				start: new Date(y, m, d, 12, 0),
				end: new Date(y, m, d, 14, 0),
				allDay: false
			}, {
				type: 'party',
				title: 'Click for Google',
				start: new Date(y, m, 28),
				end: new Date(y, m, 29),
				url: 'http://google.com/'
			}]
		};
		/* alert on eventClick */
		$scope.alertOnEventClick = function(date, jsEvent, view) {
			$scope.alertMessage = (date.title + ' was clicked ');
		};
		/* alert on Drop */
		$scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view) {
			$scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
		};
		/* alert on Resize */
		$scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view) {
			$scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
		};
		/* add and removes an event source of choice */
		$scope.addRemoveEventSource = function(sources, source) {
			var canAdd = 0;
			angular.forEach(sources, function(value, key) {
				if (sources[key] === source) {
					sources.splice(key, 1);
					canAdd = 1;
				}
			});
			if (canAdd === 0) {
				sources.push(source);
			}
		};
		/* add custom event*/
		$scope.addEvent = function() {
			$scope.events.push({
				type: 'Party',
				title: 'Open Sesame',
				start: new Date(y, m, 28, 8, 0),
				end: new Date(y, m, 29, 17, 0),
				className: ['openSesame'],
				allDay: true
			});
		};
		/* remove event */
		$scope.remove = function(index) {
			$scope.events.splice(index, 1);
		};
		/* Render Tooltip */
		$scope.eventRender = function(event, element, view) {
			element.attr({
				'tooltip': event.title,
				'tooltip-append-to-body': true
			});
			$compile(element)($scope);
		};
		// dayclick event

		function dayClick(date, jsEvent, view) {
			console.group('day click start');
			console.log(date.format());
			console.log(jsEvent.pageX);
			console.log(jsEvent.pageY);
			console.groupEnd('day click end');
			$scope.events.push({
				type: 'Hello',
				title: 'Open Sesame',
				start: new Date(y, m, 6, 8, 0),
				end: new Date(y, m, 6, 15, 0),
				className: ['openSesame'],
				allDay: false
			});
			showDatepickerDialog(jsEvent);
			// $(this).css('background-color', '#5B9E77');
		}
		/* config object */
		$scope.uiConfig = {
			calendar: {
				height: '100%',
				editable: true,
				droppable: true,
				header: {
					left: 'title',
					center: '',
					right: 'today prev,next'
				},
				dayClick: dayClick,
				eventClick: $scope.alertOnEventClick,
				eventDrop: $scope.alertOnDrop,
				eventResize: $scope.alertOnResize,
				eventRender: $scope.eventRender,
				dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
				dayNamesShort: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
				monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
				monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
			}
		};
		/* event sources array*/
		$scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
		$scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];

		$scope.dateOpts = {
			defaultDate: '08:00',
			dateFormat: 'H:i',
			enableTime: true,
			noCalendar: true,
			time_24hr: true,
			defaultHour: 8,
			defaultMinute: 0,
			minuteIncrement: 30,
			locale: 'zh',
			onChange: closeTimepicker
		};

		$scope.datePostSetup = function(fpItem) {
			console.log('flatpickr', fpItem);
		}

		function closeTimepicker(selectedDates, dateStr, instance) {
			console.log(selectedDates);
			console.log(dateStr);
			console.log(instance);
		}

		// dialog


		function showDatepickerDialog(ev) {
			$mdDialog.show({
					controller: JobSchedulingCtrl,
					templateUrl: 'datepicker.tmpl.html',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose: true,
					fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
				})
				.then(function(answer) {
					$scope.status = 'You said the information was "' + answer + '".';
				}, function() {
					$scope.status = 'You cancelled the dialog.';
				});
		}

		$scope.closeDialog = function closeDialog () {
			$mdDialog.cancel();
		}
	}
})();
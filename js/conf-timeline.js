$(document).ready(function() {
	// page is now ready, initialize the calendar...
	var firstDay = $.fullCalendar.moment.parseZone('2016-08-08+08:00');
	$('#calendar').fullCalendar({
		height: 650,
		header: false,
		weekends: false,
		defaultView: 'agendaWeek',
		defaultDate: firstDay,
		nowIndicator: true,
		minTime: "08:30:00",
		maxTime: "23:30:00",
		allDaySlot: false,
		events: [
			{
				title: 'Airport pick-up',
				start: '2016-08-08T14:00:00+08:00',
				end:   '2016-08-08T17:00:00+08:00'
			},
			{
				title: 'Opening Ceremony',
				section: 'open',
				textColor: '#333',
				backgroundColor: '#6ac1b3',
				start: '2016-08-08T17:00:00+08:00',
				end:   '2016-08-08T22:00:00+08:00'
			},
			{
				id: 1,
				title: 'Breakfast',
				start: '2016-08-09T08:30:00+08:00',
				end:   '2016-08-09T09:00:00+08:00'
			},
			{
				title: 'Introduction',
				start: '2016-08-09T09:00:00+08:00',
				end:   '2016-08-09T10:00:00+08:00'
			},
			{
				id: 2,
				title: 'Project Presentation',
				section: 'team-proj',
				textColor: '#333',
				backgroundColor: '#6ac1b3',
				start: '2016-08-09T10:00:00+08:00',
				end:   '2016-08-09T10:50:00+08:00'
			},
			{
				id: 3,
				title: 'Poster',
				start: '2016-08-09T10:50:00+08:00',
				end:   '2016-08-09T11:10:00+08:00'
			},
			{
				id: 2,
				title: 'Project Presentation',
				section: 'team-proj',
				textColor: '#333',
				backgroundColor: '#6ac1b3',
				start: '2016-08-09T11:10:00+08:00',
				end:   '2016-08-09T12:00:00+08:00'
			},
			{
				id: 3,
				title: 'Lunch & Poster',
				start: '2016-08-09T12:00:00+08:00',
				end:   '2016-08-09T13:25:00+08:00'
			},
			{
				id: 2,
				title: 'Project Presentation',
				section: 'team-proj',
				textColor: '#333',
				backgroundColor: '#6ac1b3',
				start: '2016-08-09T13:25:00+08:00',
				end:   '2016-08-09T14:15:00+08:00'
			},
			{
				id: 3,
				title: 'Poster & Tea Time',
				start: '2016-08-09T14:15:00+08:00',
				end:   '2016-08-09T15:00:00+08:00'
			},
			{
				title: 'Experience Workshop',
				section: 'workshop',
				textColor: '#333',
				backgroundColor: '#6ac1b3',
				start: '2016-08-09T15:00:00+08:00',
				end:   '2016-08-09T18:15:00+08:00'
			},
			{
				id: 3,
				title: 'Dinner & Poster',
				start: '2016-08-09T18:15:00+08:00',
				end:   '2016-08-09T21:15:00+08:00'
			},
			{
				id: 5,
				title: 'Night Trip',
				section: 'nighttrip',
				textColor: '#333',
				backgroundColor: '#6ac1b3',
				start: '2016-08-09T21:30:00+08:00',
				end:   '2016-08-10T00:00:00+08:00'
			},
			{
				id: 1,
				title: 'Breakfast',
				start: '2016-08-10T09:00:00+08:00',
				end:   '2016-08-10T09:30:00+08:00'
			},
			{
				id: 2,
				title: 'Project Presentation',
				section: 'team-proj',
				textColor: '#333',
				backgroundColor: '#6ac1b3',
				start: '2016-08-10T09:30:00+08:00',
				end:   '2016-08-10T10:20:00+08:00'
			},
			{
				id: 3,
				title: 'Poster',
				start: '2016-08-10T10:30:00+08:00',
				end:   '2016-08-10T11:10:00+08:00'
			},
			{
				id: 2,
				title: 'Project Presentation',
				section: 'team-proj',
				textColor: '#333',
				backgroundColor: '#6ac1b3',
				start: '2016-08-10T11:10:00+08:00',
				end:   '2016-08-10T12:00:00+08:00'
			},
			{
				id: 3,
				title: 'Lunch & Poster',
				start: '2016-08-10T12:00:00+08:00',
				end:   '2016-08-10T13:25:00+08:00'
			},
			{
				id: 2,
				title: 'Project Presentation',
				section: 'team-proj',
				textColor: '#333',
				backgroundColor: '#6ac1b3',
				start: '2016-08-10T13:25:00+08:00',
				end:   '2016-08-10T14:15:00+08:00'
			},
			{
				id: 3,
				title: 'Poster & Tea Time',
				start: '2016-08-10T14:15:00+08:00',
				end:   '2016-08-10T15:00:00+08:00'
			},
			{
				title: 'Campus Tour',
				section: 'campus-tour',
				textColor: '#333',
				backgroundColor: '#6ac1b3',
				start: '2016-08-10T15:00:00+08:00',
				end:   '2016-08-10T18:15:00+08:00'
			},
			{
				id: 3,
				title: 'Dinner & Poster',
				start: '2016-08-10T18:15:00+08:00',
				end:   '2016-08-10T21:15:00+08:00'
			},
			{
				id: 5,
				title: 'Night Trip',
				section: 'nighttrip',
				textColor: '#333',
				backgroundColor: '#6ac1b3',
				start: '2016-08-10T21:30:00+08:00',
				end:   '2016-08-11T00:00:00+08:00'
			},
			{
				id: 1,
				title: 'Breakfast',
				start: '2016-08-11T09:00:00+08:00',
				end:   '2016-08-11T09:30:00+08:00'
			},
			{
				id: 2,
				title: 'Project Presentation',
				section: 'team-proj',
				textColor: '#333',
				backgroundColor: '#6ac1b3',
				start: '2016-08-11T09:30:00+08:00',
				end:   '2016-08-11T10:20:00+08:00'
			},
			{
				id: 3,
				title: 'Poster',
				start: '2016-08-11T10:30:00+08:00',
				end:   '2016-08-11T11:10:00+08:00'
			},
			{
				id: 2,
				title: 'Project Presentation',
				section: 'team-proj',
				textColor: '#333',
				backgroundColor: '#6ac1b3',
				start: '2016-08-11T11:10:00+08:00',
				end:   '2016-08-11T12:00:00+08:00'
			},
			{
				id: 3,
				title: 'Lunch & Poster',
				start: '2016-08-11T12:00:00+08:00',
				end:   '2016-08-11T13:25:00+08:00'
			},
			{
				id: 2,
				title: 'Project Presentation',
				section: 'team-proj',
				textColor: '#333',
				backgroundColor: '#6ac1b3',
				start: '2016-08-11T13:25:00+08:00',
				end:   '2016-08-11T14:15:00+08:00'
			},
			{
				id: 3,
				title: 'Poster & Tea Time',
				start: '2016-08-11T14:15:00+08:00',
				end:   '2016-08-11T15:00:00+08:00'
			},
			{
				title: 'Round Table',
				section: 'round-table',
				textColor: '#333',
				backgroundColor: '#6ac1b3',
				start: '2016-08-11T15:00:00+08:00',
				end:   '2016-08-11T18:15:00+08:00'
			},
			{
				id: 3,
				title: 'Dinner & Poster',
				start: '2016-08-11T18:15:00+08:00',
				end:   '2016-08-11T21:15:00+08:00'
			},
			{
				id: 5,
				title: 'Night Trip',
				section: 'nighttrip',
				textColor: '#333',
				backgroundColor: '#6ac1b3',
				start: '2016-08-11T21:30:00+08:00',
				end:   '2016-08-12T00:00:00+08:00'
			},
			{
				id: 1,
				title: 'Breakfast',
				start: '2016-08-12T09:00:00+08:00',
				end:   '2016-08-12T09:30:00+08:00'
			},
			{
				id: 2,
				title: 'Project Presentation',
				section: 'team-proj',
				textColor: '#333',
				backgroundColor: '#6ac1b3',
				start: '2016-08-12T09:30:00+08:00',
				end:   '2016-08-12T10:20:00+08:00'
			},
			{
				id: 3,
				title: 'Poster',
				start: '2016-08-12T10:30:00+08:00',
				end:   '2016-08-12T11:10:00+08:00'
			},
			{
				id: 2,
				title: 'Project Presentation',
				section: 'team-proj',
				textColor: '#333',
				backgroundColor: '#6ac1b3',
				start: '2016-08-12T11:10:00+08:00',
				end:   '2016-08-12T12:00:00+08:00'
			},
			{
				id: 3,
				title: 'Lunch & Poster',
				start: '2016-08-12T12:00:00+08:00',
				end:   '2016-08-12T14:00:00+08:00'
			},
			{
				title: 'Closing Ceremony',
				section: 'closing',
				textColor: '#333',
				backgroundColor: '#6ac1b3',
				start: '2016-08-12T15:00:00+08:00',
				end:   '2016-08-12T18:00:00+08:00'
			},
			{
				title: 'Farewell Dinner',
				section: 'closing',
				start: '2016-08-12T18:00:00+08:00',
				end:   '2016-08-12T21:00:00+08:00'
			}
		],
		eventClick: function(event){
			if(event.section) toEvent(event.section);
		},
		eventMouseover: function(event){
			if(event.section) $(this).css('cursor','pointer');
		}
	})
});

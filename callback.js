				retData2 = EastNorthToLatLon('391166,806910');
	               		pushpin2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(retData2[0],retData2[1]), { color: 'blue', enableHoverStyle: true, enableClickedStyle: true, catId : 'test' });
				Microsoft.Maps.Events.addHandler(pushpin2, 'click', togglePinState);
                		map.entities.push(pushpin2);

				retData1 = EastNorthToLatLon('391186,806930');
	               		pushpin1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(retData1[0],retData1[1]), { color: 'blue', enableHoverStyle: true, enableClickedStyle: true, catId : 'test2' });
				Microsoft.Maps.Events.addHandler(pushpin1, 'click', togglePinState);
                		map.entities.push(pushpin1);

				//Being fixed
				retData3 = EastNorthToLatLon('391196,806950');
	               		pushpin3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(retData3[0],retData3[1]), { color: 'red', catId : 'test3' });
                		map.entities.push(pushpin3);
// SC Code by https://github.com/capital-G

~net = NetAddr("127.0.0.1", 3333);
n = ~net;

(
Event.addEventType(\yt, {
	n.sendMsg("/video", ~pos);
});
)

(
// new 3.14 kwargs syntax <3
Pdef(\foo, Pbind(
	type: \yt,
	pos: Pseq([105.1,109.5], inf),
	dur: 0.1,
)).play;
)

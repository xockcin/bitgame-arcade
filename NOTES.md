# 7/13/21

This is the newest, although probably not the last, version of Bitgame. In the first version I used class components, pulled the solutions data from Github after generating it with an incredibly inefficient Python script, used Bootstrap, and bent over backwards to avoid using Redux. It looks great, it works fine, but I hated the code so much that I started over.

I began the second version by using the react-redux counter template. It uses all functional components and react-toolkit, so the code is much cleaner. But I still feel like it's not quite how I want it to be. It still feels fundamentally hacked together instead of being built with consideration.

So here's version three. Let me begin by thinking through just how big I want it to be and what, exactly, I want it to do.

I have two options: I can either have my version three look and act exactly the same as version one, except with nicer-looking and hopefully more extensible code. Or I can build a version three that is fundamentally bigger than version one, and capable of more.

Obviously number two is the correct choice. It's time for bitgame to become an actual game.

Time for some visioning.

Bitgame Arcade is a game in which you learn how computers work by, in effect, building a computer.

For right now, it doesn't matter how it looks. Try not to think about that yet. What matters is how it works.

The term "arcade" implies a suite of games, and I think that's what Bitgame Arcade is. The game I call "bitgame-ultra" is one of those games. But there could be many others.

I have been thinking of Bitgame Arcade in terms of a sequence, but it is definitely more of a "sandbox" game. I don't think it necessarily needs a plot or fictional premise. It could be a didactic sandbox game, just as Scott McClouds books are didactic comic books.

There is bitgame-ultra and there is also the tutorial game, bitgame-legends or bitgame-origins. I think I like the latter.

Note that I might not end up working on this right now, or even today. There's a lot to figure out. It's not obvious how I ought to proceed, as it is with some other projects.

Nevertheless, I should persist. The metaphor is an arcade. I am taking some rhetorical cues from, say, Kabbalah or Neoplatonism - the sense of being invited deeper and deeper into the mystery. The greatest pleasure of the sandbox game is to look at something that seems small at first, and discover a whole little world tucked away inside it. 

At first, you are outside the arcade. You must master the fundamentals of bits before you are permitted to enter. The phrasing of the first utterance is key: "EVERYTHING is made of bits!" Not all data, not everything in a computer - no, EVERYTHING. Because the universe of the game is a computer universe. 

I have written a lot of content for the tutorial. What I need to figure out now is how to display that content in a presentational component in an interactive manner.

The tutorial is structured as a series of screens. Each screen is, essentially, a set of parameters that determine what is to be displayed on the screen. First, there is the text. That is the easiest to understand. There is also a forward button, which the user must click to advance to the next screen. Clicking the forward button is always the way you advance to the next screen. Sometimes you will have to perform some task before you can advance; in those cases, the forward button will be greyed out until you perform that task.

Every screen will have a certain number of bits on it. In order to display, the screen component will need to know the number of bits; the initial value of the bits; the manner in which the user is able to control the bits; and the tasks, if any, that the user must perform in order to be able to move on to the next screen.

The value of the bits will be stored as a number. In the first buildout of the game, I stored it as an array of booleans, but storing it as a number is easier.

So the screen needs to know the text to display, the initial number (and also the current number), the number of bytes, how the user can control the bytes, and what the user must do to advance. The last two are a little trickier.

In a bitgame, there are basically two ways of controlling the bits: either by turning them on and off individually, or by using bit operations to manipulate all of them at once. So the question of controlling the bits actually comes down to two questions: whether or not bit toggling is permitted, and which bit operations are permitted. That will be two state variables, one boolean and one array.

Now there is the question of how to enforce certain conditions for advancing in the game. This is a feature that I won't use that much. Mostly they will be able to just move forward. But, for instance, in the very beginning I want them to click the bit to turn it on and then click it again to turn it back off. Both of those could be implemented simply by requiring the user to achieve a certain number. That's simple enough.

The really tricky part will come when we start to actually play the game - that is, keep track of steps. But if I want the game to build to that, I need to have it built in from the beginning.

But maybe I'll not worry about that right now. With hooks, it's not hard to add more state as your project expands.

For now, let's think about this in somewhat greater detail. Once again, in order to display a screen in my tutorial, I need five pieces of information, which are the following:
1. The text.
2. The number of bits.
3. The initial value of the bits (which can then be changed).
4. Whether or not bit toggling is permitted.
5. An array of permitted bit operations.
6. The condition to be met in order to advance, if any.

So each of these things is an object with all these as properties, including an additional "id" property just to keep things nice and tidy.

The app receives each of these objects as props. So really, it only needs two states, I guess, which are the current value of the bits and whether or not the user is permitted to advance to the next screen. Something needs to know what page is the current page, but it might make more sense to put that in a wrapper component.

There is also the question of how to decide what formats (i.e. dec, hex, ascii) to display. I might just make it automatic, so dec always displays when there are two or more bits, hex always displays when there are four or more bits, and ascii displays once there are eight bits.

I shouldn't think about layout yet. Just throw everything up there on the screen and then I'll decide where it goes.

So there is, let's say, a PageFrame component, which knows what page we're on. Its only job is to know what page we're on, and to provide to its child component the contents of that page as well as a pointer to a function that advances to the next page. The Page component only knows the contents of the page at any given moment. It has the ability to advance to the next page, but decides for itself whether or not to grant that ability to the user.

I also would like an efficient way to generate the big, repetitive json file that will constitute my content. The best way might just be with a Google Form.

Let's try it out.
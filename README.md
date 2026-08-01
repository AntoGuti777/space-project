Explore the Solar System
Project Option

Responsive Website

Project Description

Explore the Solar System is an interactive educational website that allows users to learn about the eight planets in our Solar System. Users can select individual planets to open detailed profiles containing scientific facts, distance from the Sun, number of known moons, average temperature, length of day, and a brief cultural astrology note. The experience also includes exploration progress tracking, rotating space facts, responsive layouts, and animated visual feedback.

Theme Interpretation

The project interprets the theme of Space by transforming the Solar System into an interactive digital exploration experience. A moving space background, individual planet images, glowing effects, an astronaut logo, and space-inspired colors create an immersive visual environment. The website combines this design with educational information that encourages users to explore our cosmic neighborhood.

Intended User or Player

The website is designed for students, casual space enthusiasts, and other users who want an accessible and visually engaging introduction to the planets. The information is organized so that users do not need advanced scientific knowledge to understand or enjoy the experience.

User or Player Goal

The user’s goal is to explore all eight planets and learn how they differ. The exploration-progress feature records which planetary profiles have been opened and encourages the user to reach “Planets Explored: 8/8.”

Main Features
A homepage introducing the interactive Solar System experience
A “How to Explore” section containing clear instructions
Eight interactive planet images
Detailed informational modals for every planet
Scientific facts and planetary statistics
Clearly labeled cultural astrology notes
A progress display that tracks explored planets
A random “Did You Know?” space-fact generator
Scroll-triggered fade-in animations
Glowing hover and selection effects
Responsive desktop, tablet, and mobile layouts
Accessible labels, focus states, and keyboard controls
An About section explaining the project’s educational purpose
JavaScript Features

JavaScript controls several meaningful parts of the experience. Event listeners detect when users select planets and use the selected planet’s data to update and display the appropriate modal. The modal can be closed with its close button, by selecting the area outside it, or by pressing the Escape key.

JavaScript also stores the planets viewed during the current session in a Set. It updates the planet counter, progress bar, explored labels, and completion message whenever a new planet is selected. A random-fact function displays a different space fact when the page loads and when the user selects the “Show Another Fact” button. An IntersectionObserver adds fade-in animations as sections enter the viewport.

Responsive Design

The website uses fluid measurements, CSS Grid, flexible content containers, and media queries to adapt to different browser sizes. The planet grid displays four columns on larger screens, two columns on tablets and smaller screens, and one column on very small phones. The navigation, informational cards, About content, progress display, and planet modals also rearrange to remain readable and usable.

Planet images scale down on smaller devices, and modal content becomes vertically scrollable when necessary. The website was checked for text readability, image scaling, button usability, spacing, alignment, and horizontal overflow at desktop, tablet, and mobile widths.

User Testing

Two classmates tested the website using different browsers and screen sizes. Both testers understood the website’s purpose and successfully used the “Start Exploring” button to reach the planet section. They found the navigation organized and easy to use and enjoyed the space theme, glowing hover effects, planet animations, and modal windows.

Both testers understood that the planets were interactive, although they briefly hesitated before selecting one. They recommended adding more explicit instructions, expanding the information inside the planet modals, and adding more content and visual elements. The responsive planet grid worked successfully during testing, and no major broken interactions or functional problems were identified.

One user suggested adding a control to pause the moving background. After considering the suggestion, I chose not to implement it because the animation is an intentional part of the immersive visual design. Testing showed that it did not interfere with readability, navigation, visibility, or task completion.

Revisions

After user testing, I made the following meaningful revisions:

I added the instruction “Click a planet to start exploring” to make the main interaction immediately clear to first-time users.
I expanded every planet modal to include distance from the Sun, number of known moons, average temperature, length of day, a scientific fun fact, and a clearly labeled cultural astrology note.
I created an exploration-progress system that tracks which planets have been opened, updates a progress bar, and displays a completion message after all eight planets have been explored.
I added a “Did You Know?” section that presents a random space fact when the page loads and allows users to generate additional facts.
I expanded the homepage, created a “How to Explore” section, and added more information to the About section to clarify the purpose, intended audience, features, and educational focus.
I added an astronaut logo, additional space-themed icons, progress feedback, explored labels, and subtle scroll-triggered animations to improve the visual presentation.
I added visible keyboard-focus states, improved modal keyboard controls, reduced-motion support, and additional responsive adjustments for tablets and phones.

Technologies Used
HTML
CSS
JavaScript
GitHub Pages
Visual Studio Code
Canva

Credits
Planetary information and research: NASA Science – About the Planets
Solar System temperature information: NASA Science – Solar System Temperatures
Planet images: Canva graphics and design elements
Astronaut logo: Canva graphic
Background video file: Canva
Website design, creative direction, content organization, and original project concept: Antonella Gutierrez
Development completed using HTML, CSS, JavaScript, Visual Studio Code, and GitHub Pages
ChatGPT was used to assist with code development, debugging, accessibility improvements, responsive-design revisions, and README organization

No outside fonts or sound effects were used.
# Personal Website

<img width="1512" alt="Screenshot 2024-09-16 at 11 51 43 AM" src="https://github.com/user-attachments/assets/33c1e4a6-cf0f-4aa8-a461-83aac714e392">

This repository houses the source code for Version 3 (v3) of my personal website. The site is built using Next.js (App Router, statically exported) with TypeScript and React Bootstrap components, and is hosted on GitHub Pages. It contains information about myself, specifically my interests, work experiences, and personal projects. I've also started a small (but growing) blog about my passions aside from coding. Feel free to check it out here: https://www.melvinrajendran.com.

In many ways, this site has been my web development playground, and I've used it to apply new skills as I've learned them. I plan on adding newer details, projects, and features to it throughout my career. In the meantime, I would be more than happy to hear any feedback regarding areas of improvement.

## Notes on Prior Versions

Version 1 (v1) of my personal website was built using HTML, CSS, JavaScript, and Bootstrap 5. Although it contained a lot of the same content as subsequent versions, it used a lot of repetitive code, had a poor project architecture, and was a little dreary with a monochrome user interface and unappealing font.

In Version 2 (v2), I implemented React functional components that, when used in conjunction with ES6 mapping, consolidated the repetitive code in Version 1.0. Furthermore, I used React hooks to animate the site's pages and custom components. As a final touch, I designed a more colorful, simplistic user interface that I'm really proud of.

The code for these previous versions is no longer (readily) available on GitHub, as I believe the current version of my website is the best reflection of my skill set. However, if you'd like to dig through the commit history and locate the older files, feel free to do so 😁.

## Code Style

The primary style guide used in this codebase is linked here: https://github.com/rwaldron/idiomatic.js.

## Color Palette

| Color        | Hex                                                                                                                                                                              |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fern Green   | ![Screenshot 2024-09-16 at 11 55 55 AM](https://github.com/user-attachments/assets/559a2d40-561c-4648-ba9b-863d18e58c54) #4F772D                                                 |
| Raisin Black | <img width="15" alt="Screen Shot 2021-09-07 at 11 03 13 AM" src="https://user-images.githubusercontent.com/44681827/132367781-a65ff455-3e2d-42d2-bb1a-53efea852435.png"> #21252A |
| Outer Space  | <img width="15" alt="Screen Shot 2021-09-07 at 11 03 19 AM" src="https://user-images.githubusercontent.com/44681827/132367790-64040fd1-8cd3-4786-b9c1-a67f4f663364.png"> #495057 |
| Platinum     | <img width="15" alt="Screen Shot 2021-09-07 at 11 03 27 AM" src="https://user-images.githubusercontent.com/44681827/132367806-fb9e48e2-17b4-4580-9f49-c0a5af0402b0.png"> #D9D9D9 |
| Platinum     | <img width="15" alt="Screen Shot 2021-09-07 at 11 03 34 AM" src="https://user-images.githubusercontent.com/44681827/132367835-c1c7e87d-90fb-4c80-a19c-abc2034ba837.png"> #E3E3E3 |
| White        | ![Screenshot 2024-09-16 at 11 56 09 AM](https://github.com/user-attachments/assets/0615ba0e-d0c2-47d8-9173-77a92836d05e) #FDFCFA                                                 |
| White        | <img width="15" alt="Screen Shot 2021-09-07 at 11 03 47 AM" src="https://user-images.githubusercontent.com/44681827/132367869-50219015-92fb-409d-93c4-692b116cc096.png"> #FFFFFF |

## Development

Requires Node.js 20.9 or later.

- `npm run dev`: starts the Next.js dev server at http://localhost:3000.
- `npm run build`: statically exports the site to `out/`.
- `npm start`: serves `out/` locally (run `npm run build` first).
- `npm run lint` / `npm run format`: ESLint (with `--fix`) and Prettier.

## Deployment

Pushing to `main` triggers the `Deploy to GitHub Pages` GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site and publishes `out/` to GitHub Pages.

# 🎲 excuse-die

A virtual dice roller built with React, TypeScript, and Vite. Roll the die and let fate decide your excuse.

# Link to app
[https://excuse-die.vercel.app/](https://excuse-die.vercel.app/)

# Learnings
- Faced this error: Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components.

    - React's Fast Refresh (hot reload) relies on being able to identify which exports are React components. When a file mixes component exports with non-component exports, Fast Refresh can't reliably determine what to re-render, potentially leading to full page reloads instead of hot updates.
    - The fix: Split the file into single responsibility/ focused files:

- Watch out for situations like: If you call setState in a useEffect without a dependency array (or with the updated state inside the dependency array), you will trigger an infinite loop.
    - Why it happens: React renders the component -> useEffect runs -> setState is called -> State changes, triggering a re-render -> useEffect runs again -> and so on.

- React strictly enforces a rule against impure functions during render. When React calls your component, it expects it to act like a pure math formula: if you give it the exact same props and state, it must return the exact same UI, every single time.
    - If you put Math.random() directly in the body of your component, you break this rule.
    - React knows you eventually have to do impure things—like fetching data, generating random numbers, or setting up timers. That's why we use useEffect.
    - The callback function you pass into useEffect does not run during the render phase. It runs after React has already calculated the UI and updated the screen. Because it happens outside of the rendering process, it is the designated safe zone for impurities. 

# 🪟 Modal Window Demo

A simple, educational project exploring three different ways to open and close modal windows. Built with **vanilla JavaScript** — no frameworks, no libraries.

### 🔗 [**Play the Live Demo**](https://shaheereminent.github.io/Modal/)

---

## 🎯 What This Project Does

Three buttons. Each one opens a different modal with its own content. Every modal can be closed in **three different ways**.

It's a small project built to understand the mechanics of modal windows — how they show, how they hide, and how users interact with them.

---

## 🎮 How It Works

### Three Modals, Three Buttons

Each button on the page opens a specific modal:

| Button | Opens |
|--------|-------|
| **Modal 1** | A simple info modal |
| **Modal 2** | A confirmation-style modal |
| **Modal 3** | A content-style modal |

### Three Ways to Close

Every modal can be dismissed with **any** of these:

1. **The ✕ Cross Button** — Click the close icon in the top-right of the modal
2. **The Escape Key** — Press `Esc` on your keyboard
3. **Click Outside** — Click the dark overlay area outside the modal box

All three methods work on every modal. Consistency was the goal.

---

## 🧠 What I Learned Building This

This project was an exercise in **event handling** and **state management**. Key concepts practiced:

- **Multiple Event Listeners** — One listener per open button, plus a global `keydown` listener for Escape, plus a click listener on the overlay for outside-click detection.
- **Class Toggling for Visibility** — Modals show/hide by toggling a `.hidden` class rather than setting inline styles. Cleaner and more maintainable.
- **Event Delegation for Outside Click** — Detecting clicks on the overlay (not the modal box) requires checking `event.target` carefully.
- **Keyboard Accessibility** — Listening for `Escape` on `document` makes the modals feel native.
- **DRY Structure** — Shared open/close logic with per-modal configuration instead of three copies of the same code.

---

## 🛠️ Tech Stack

- **HTML5** — Semantic structure
- **Vanilla JavaScript (ES6+)** — All logic handwritten
- **CSS** — Styling

---

## 🚀 Running Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/shaheereminent/Modal.git

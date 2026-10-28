const reasons = [
  { text: "You make even an ordinary day feel special.", category: "Everyday magic" },
  { text: "Your smile can brighten my mood.", category: "Your smile" },
  { text: "I can be myself around you.", category: "Comfort" },
  { text: "You make me feel lucky to know you.", category: "Gratitude" },
  { text: "The little things you do stay in my heart.", category: "Little things" },
  { text: "You have a way of making me feel understood.", category: "Connection" },
  { text: "Talking with you is one of my favorite things.", category: "Together" },
  { text: "You make me want to become a better person.", category: "Inspiration" },
  { text: "I love hearing about your day.", category: "Everyday magic" },
  { text: "You make distance feel a little less difficult.", category: "Connection" },
  { text: "Your laugh is one of my favorite sounds.", category: "Your smile" },
  { text: "You remember little details that matter to me.", category: "Little things" },
  { text: "You can make me smile without even trying.", category: "Your smile" },
  { text: "I love the way you express yourself.", category: "Who you are" },
  { text: "You give me memories I want to keep forever.", category: "Memories" },
  { text: "You make quiet moments feel comfortable.", category: "Comfort" },
  { text: "I love learning new things about you.", category: "Who you are" },
  { text: "You have your own special way of caring.", category: "Your heart" },
  { text: "You make me excited about the little plans we make.", category: "Together" },
  { text: "You are the person I want to tell my good news to.", category: "Connection" },
  { text: "I love your unique personality.", category: "Who you are" },
  { text: "You make me appreciate the present moment.", category: "Everyday magic" },
  { text: "You inspire me with the way you keep going.", category: "Inspiration" },
  { text: "I love the stories and experiences you share.", category: "Together" },
  { text: "You make simple conversations meaningful.", category: "Connection" },
  { text: "You bring warmth into my life.", category: "Your heart" },
  { text: "I love seeing you excited about something you enjoy.", category: "Your smile" },
  { text: "You remind me that love can live in small gestures.", category: "Little things" },
  { text: "You make our memories feel priceless.", category: "Memories" },
  { text: "I love the way we can make our own little jokes.", category: "Together" },
  { text: "You make me feel appreciated.", category: "Comfort" },
  { text: "I love how there is always something to learn about you.", category: "Who you are" },
  { text: "You make me look forward to tomorrow.", category: "Inspiration" },
  { text: "I love the kindness you show to people.", category: "Your heart" },
  { text: "You make my favorite moments even better.", category: "Memories" },
  { text: "I love getting messages from you.", category: "Little things" },
  { text: "You make me feel connected, even when we're busy.", category: "Connection" },
  { text: "I love how your presence can calm a hectic day.", category: "Comfort" },
  { text: "You make being together feel like enough.", category: "Together" },
  { text: "I love your little habits and quirks.", category: "Little things" },
  { text: "You make me believe in the beauty of growing together.", category: "Inspiration" },
  { text: "I love the way you share your thoughts with me.", category: "Connection" },
  { text: "You give me reasons to be thankful.", category: "Gratitude" },
  { text: "I love the excitement of planning something with you.", category: "Together" },
  { text: "You make me value patience and understanding.", category: "Inspiration" },
  { text: "I love the moments when we laugh at the same thing.", category: "Memories" },
  { text: "You make even a short conversation worth remembering.", category: "Everyday magic" },
  { text: "I love the care behind your words.", category: "Your heart" },
  { text: "You make me proud of the bond we are building.", category: "Together" },
  { text: "I love that we can create new memories in simple places.", category: "Memories" },
  { text: "You make affection feel natural and sincere.", category: "Your heart" },
  { text: "I love the way you keep being uniquely you.", category: "Who you are" },
  { text: "You remind me to celebrate small wins.", category: "Inspiration" },
  { text: "I love having someone whose day I genuinely want to hear about.", category: "Connection" },
  { text: "You make thoughtful gestures mean so much.", category: "Little things" },
  { text: "I love how our conversations can go from silly to serious.", category: "Together" },
  { text: "You make me treasure the time we get together.", category: "Gratitude" },
  { text: "I love the comfort of knowing we can keep learning about each other.", category: "Comfort" },
  { text: "You bring a little extra color to my world.", category: "Everyday magic" },
  { text: "I love the memories that make us say, 'Remember when?'", category: "Memories" },
  { text: "You make me want to show up with care and effort.", category: "Inspiration" },
  { text: "I love how your interests become stories I want to hear.", category: "Who you are" },
  { text: "You make a simple good morning feel meaningful.", category: "Little things" },
  { text: "I love how we can look forward to seeing each other.", category: "Together" },
  { text: "You remind me that being loved also means being accepted.", category: "Comfort" },
  { text: "I love your honesty and the conversations it opens.", category: "Connection" },
  { text: "You make me appreciate the journey, not just the big moments.", category: "Gratitude" },
  { text: "I love how you can turn a random moment into a memory.", category: "Memories" },
  { text: "You make me want to be more thoughtful.", category: "Inspiration" },
  { text: "I love the sweetness in the way you care.", category: "Your heart" },
  { text: "You make sharing my thoughts feel worthwhile.", category: "Connection" },
  { text: "I love that we have things only the two of us understand.", category: "Together" },
  { text: "You remind me to slow down and enjoy good moments.", category: "Everyday magic" },
  { text: "I love the way you keep surprising me with who you are.", category: "Who you are" },
  { text: "You make our little traditions special.", category: "Memories" },
  { text: "I love that I can cheer for your goals and dreams.", category: "Inspiration" },
  { text: "You make kindness feel powerful.", category: "Your heart" },
  { text: "I love the small updates that make me feel included in your day.", category: "Little things" },
  { text: "You make the world feel friendlier to me.", category: "Comfort" },
  { text: "I love every new chapter we get to discover.", category: "Together" },
  { text: "You make me thankful for the day our paths crossed.", category: "Gratitude" },
  { text: "I love how a memory of you can make me smile later.", category: "Memories" },
  { text: "You remind me that meaningful love is built through effort.", category: "Inspiration" },
  { text: "I love your perspective, even when it differs from mine.", category: "Who you are" },
  { text: "You make the little celebrations worth celebrating.", category: "Everyday magic" },
  { text: "I love how we can keep finding new things to talk about.", category: "Connection" },
  { text: "You make me want to listen more carefully.", category: "Inspiration" },
  { text: "I love the gentle moments we don't need to explain.", category: "Comfort" },
  { text: "You make it fun to imagine future adventures together.", category: "Together" },
  { text: "I love how you make your own mark on my memories.", category: "Memories" },
  { text: "You deserve to be celebrated for who you are.", category: "Your heart" },
  { text: "I love getting to know every side of you over time.", category: "Who you are" },
  { text: "You make me grateful for the love we choose to give.", category: "Gratitude" },
  { text: "I love how even a tiny message from you can lift my mood.", category: "Little things" },
  { text: "You make ordinary plans something I can look forward to.", category: "Everyday magic" },
  { text: "I love the trust we can keep building together.", category: "Connection" },
  { text: "You remind me to be gentle with myself and others.", category: "Inspiration" },
  { text: "I love the memories we have yet to make.", category: "Memories" },
  { text: "You make choosing care and understanding feel important.", category: "Your heart" },
  { text: "I love that there is no one else quite like you.", category: "Who you are" },
  { text: "You are my Babi, and that makes this page extra special.", category: "Just you" },
  { text: "After these 100 reasons, I still keep finding more reasons to love you.", category: "Just you" }
];

const STORAGE_KEYS = {
  favorites: "babiLoveFavorites",
  read: "babiLoveRead",
  theme: "babiLoveTheme"
};

const state = {
  filter: "all",
  category: "All",
  search: "",
  sort: "default",
  visible: 20,
  favorites: new Set(readStorage(STORAGE_KEYS.favorites, [])),
  read: new Set(readStorage(STORAGE_KEYS.read, []))
};

const grid = document.getElementById("reasonGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilters = document.getElementById("categoryFilters");
const emptyState = document.getElementById("emptyState");
const showMoreButton = document.getElementById("showMoreButton");
const resultsCount = document.getElementById("resultsCount");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const favoriteCount = document.getElementById("favoriteCount");
const modal = document.getElementById("surpriseModal");
const toast = document.getElementById("toast");
let toastTimer;
let surpriseIndex = -1;

function readStorage(key, fallback) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key));
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}
function saveStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage may be unavailable */ }
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}
function updateStats() {
  const count = state.read.size;
  progressText.textContent = `${count} / 100 read`;
  progressBar.style.width = `${Math.min(100, count)}%`;
  favoriteCount.textContent = state.favorites.size;
}
function getCategories() {
  return ["All", ...new Set(reasons.map(reason => reason.category))];
}
function renderCategories() {
  categoryFilters.innerHTML = "";
  getCategories().forEach(category => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `category-chip${state.category === category ? " active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      state.category = category;
      state.visible = 20;
      renderCategories();
      renderReasons();
    });
    categoryFilters.appendChild(button);
  });
}
function getFilteredReasons() {
  let items = reasons.map((reason, index) => ({ ...reason, index }));
  const query = state.search.trim().toLowerCase();
  if (query) {
    items = items.filter(item =>
      item.text.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      String(item.index + 1).includes(query)
    );
  }
  if (state.filter === "heart") items = items.filter(item => state.favorites.has(item.index));
  if (state.filter === "unread") items = items.filter(item => !state.read.has(item.index));
  if (state.category !== "All") items = items.filter(item => item.category === state.category);

  if (state.sort === "random") {
    items = [...items].sort(() => Math.random() - 0.5);
  } else if (state.sort === "read") {
    items.sort((a, b) => Number(state.read.has(a.index)) - Number(state.read.has(b.index)) || a.index - b.index);
  } else {
    items.sort((a, b) => a.index - b.index);
  }
  return items;
}
function createReasonCard(item, displayIndex) {
  const card = document.createElement("article");
  const isRead = state.read.has(item.index);
  const isFavorite = state.favorites.has(item.index);
  card.className = `reason-card${isRead ? " read" : ""}`;
  card.style.animationDelay = `${Math.min(displayIndex * 18, 180)}ms`;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Reason ${item.index + 1}: ${item.text}. ${isRead ? "Read" : "Not read yet"}. Press Enter to toggle read.`);
  card.innerHTML = `
    <div class="reason-topline">
      <span class="reason-number">${String(item.index + 1).padStart(2, "0")}</span>
      <button class="favorite-button${isFavorite ? " is-favorite" : ""}" type="button"
        aria-label="${isFavorite ? "Remove from favorites" : "Add to favorites"}" aria-pressed="${isFavorite}">${isFavorite ? "♥" : "♡"}</button>
    </div>
    <p class="reason-text"></p>
    <div class="reason-bottom">
      <span class="reason-category"></span>
      <span class="read-label">${isRead ? "✓ Read" : "Tap to read"}</span>
    </div>`;
  card.querySelector(".reason-text").textContent = item.text;
  card.querySelector(".reason-category").textContent = item.category;

  const favoriteButton = card.querySelector(".favorite-button");
  favoriteButton.addEventListener("click", event => {
    event.stopPropagation();
    if (state.favorites.has(item.index)) state.favorites.delete(item.index);
    else state.favorites.add(item.index);
    saveStorage(STORAGE_KEYS.favorites, [...state.favorites]);
    updateStats();
    renderReasons();
  });
  const toggleRead = () => {
    if (state.read.has(item.index)) state.read.delete(item.index);
    else state.read.add(item.index);
    saveStorage(STORAGE_KEYS.read, [...state.read]);
    updateStats();
    renderReasons();
  };
  card.addEventListener("click", event => {
    if (!event.target.closest(".favorite-button")) toggleRead();
  });
  card.addEventListener("keydown", event => {
    if ((event.key === "Enter" || event.key === " ") && !event.target.closest(".favorite-button")) {
      event.preventDefault();
      toggleRead();
    }
  });
  return card;
}
function renderReasons() {
  const items = getFilteredReasons();
  const shown = items.slice(0, state.visible);
  grid.innerHTML = "";
  shown.forEach((item, index) => grid.appendChild(createReasonCard(item, index)));
  emptyState.hidden = items.length !== 0;
  grid.hidden = items.length === 0;
  showMoreButton.hidden = items.length <= shown.length;
  resultsCount.textContent = items.length === 100
    ? `Showing ${shown.length} of 100 reasons`
    : `Showing ${shown.length} of ${items.length} ${items.length === 1 ? "reason" : "reasons"}`;
  updateStats();
}
function setFilter(filter) {
  state.filter = filter;
  state.visible = 20;
  document.querySelectorAll(".filter-chip").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  renderReasons();
}
function openSurprise() {
  const candidates = reasons.map((_, index) => index);
  let pick = candidates[Math.floor(Math.random() * candidates.length)];
  if (candidates.length > 1 && pick === surpriseIndex) pick = (pick + 1 + Math.floor(Math.random() * 99)) % 100;
  surpriseIndex = pick;
  document.getElementById("surpriseReason").textContent = reasons[pick].text;
  document.getElementById("surpriseNumber").textContent = `REASON ${String(pick + 1).padStart(2, "0")} OF 100 · ${reasons[pick].category.toUpperCase()}`;
  modal.hidden = false;
  document.getElementById("closeSurprise").focus();
}
function closeSurprise() {
  modal.hidden = true;
  document.getElementById("surpriseButton").focus();
}

searchInput.addEventListener("input", () => {
  state.search = searchInput.value;
  state.visible = 20;
  renderReasons();
});
document.querySelectorAll(".filter-chip").forEach(button => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});
document.getElementById("sortSelect").addEventListener("change", event => {
  state.sort = event.target.value;
  state.visible = 20;
  renderReasons();
});
showMoreButton.addEventListener("click", () => {
  state.visible += 20;
  renderReasons();
});
document.getElementById("resetFilters").addEventListener("click", () => {
  state.filter = "all"; state.category = "All"; state.search = ""; state.sort = "default"; state.visible = 20;
  searchInput.value = "";
  document.getElementById("sortSelect").value = "default";
  setFilter("all");
  renderCategories();
  renderReasons();
});
document.getElementById("surpriseButton").addEventListener("click", openSurprise);
document.getElementById("anotherSurprise").addEventListener("click", openSurprise);
document.getElementById("closeSurprise").addEventListener("click", closeSurprise);
modal.querySelectorAll("[data-close-modal]").forEach(element => element.addEventListener("click", closeSurprise));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modal.hidden) closeSurprise();
  if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
    event.preventDefault(); searchInput.focus();
  }
});
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  document.getElementById("themeToggle").textContent = isDark ? "☀" : "☾";
  document.getElementById("themeToggle").setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  try { localStorage.setItem(STORAGE_KEYS.theme, isDark ? "dark" : "light"); } catch {}
});
document.getElementById("copyNoteButton").addEventListener("click", async () => {
  const note = document.querySelector(".note-message").textContent;
  try {
    await navigator.clipboard.writeText(note);
    showToast("Your little note has been copied 💙");
  } catch {
    const temp = document.createElement("textarea");
    temp.value = note; document.body.appendChild(temp); temp.select();
    const copied = document.execCommand("copy"); temp.remove();
    showToast(copied ? "Your little note has been copied 💙" : "Copy is not available in this browser.");
  }
});
document.getElementById("backToTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

try {
  if (localStorage.getItem(STORAGE_KEYS.theme) === "dark") {
    document.body.classList.add("dark-theme");
    document.getElementById("themeToggle").textContent = "☀";
    document.getElementById("themeToggle").setAttribute("aria-label", "Switch to light theme");
  }
} catch {}
renderCategories();
renderReasons();

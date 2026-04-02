import { r as reactExports, j as jsxRuntimeExports, W as Sparkles, T as Tabs, c as TabsList, d as TabsTrigger, e as TabsContent, Y as Search, I as Input, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, V as BookOpen, B as Badge, a as Button, D as Dialog, E as DialogContent, F as DialogHeader, G as DialogTitle } from "./index-BKSOHxCA.js";
import { C as Card, b as CardContent } from "./card-B5HK9w9e.js";
import { L as Link2 } from "./link-2-74KRurxI.js";
const STORIES = [
  {
    id: "s1",
    title: "Ramayana — The Epic Journey of Rama",
    culture: "Hindu",
    country: "India",
    countryFlag: "🇮🇳",
    category: "Mythology",
    excerpt: "The story of Prince Rama, his exile into the forest, the abduction of his wife Sita by the demon king Ravana, and his triumphant return after the great battle...",
    fullText: "The Ramayana is one of the two great epics of ancient India. It tells the story of Prince Rama of Ayodhya, who is exiled to the forest for 14 years along with his wife Sita and his devoted brother Lakshmana. When the demon king Ravana abducts Sita and takes her to Lanka, Rama allies with the monkey king Sugriva and the mighty Hanuman to rescue her. The climactic battle between Rama's army and Ravana's forces culminates in the defeat of Ravana and the liberation of Sita. The epic explores themes of dharma (righteousness), devotion, loyalty, and the triumph of good over evil. The Ramayana has profoundly influenced Southeast Asian cultures, with versions found in Thailand (Ramakien), Cambodia, Indonesia, and as far as Malaysia.",
    tags: ["epic", "dharma", "Vishnu", "avatar"],
    similarCultures: [
      "Thai (Ramakien)",
      "Khmer",
      "Indonesian (Kakawin Ramayana)"
    ],
    ritualsSection: "Diwali celebrates Rama's return to Ayodhya. Ram Navami marks his birth. Hanuman Jayanti honors his devotee."
  },
  {
    id: "s2",
    title: "The Mahabharata — The War of Dharma",
    culture: "Hindu",
    country: "India",
    countryFlag: "🇮🇳",
    category: "Mythology",
    excerpt: "The great war between the Pandavas and the Kauravas at Kurukshetra, where Lord Krishna delivered the Bhagavad Gita — the song of the Divine...",
    fullText: "The Mahabharata is the world's longest epic poem, containing the Bhagavad Gita within it. The narrative follows the conflict between two groups of royal cousins — the five Pandavas and their hundred Kaurava cousins — for the throne of Hastinapura. The 18-day Kurukshetra War is the central event. Before the battle begins, the warrior Arjuna is overcome with doubt and grief at the prospect of fighting his kinsmen. Lord Krishna, his charioteer, delivers the Bhagavad Gita — a 700-verse dialogue on duty, righteousness, devotion, and the nature of the soul. The text explores profound philosophical questions about free will, cosmic order, and the soul's immortality.",
    tags: ["Bhagavad Gita", "Krishna", "Pandavas", "dharma"],
    similarCultures: ["Greek (Trojan War themes)", "Norse (Ragnarok)"],
    ritualsSection: "Gita Jayanti marks the day Krishna delivered the Bhagavad Gita. Makar Sankranti coincides with Bhishma Pitamah's departure."
  },
  {
    id: "s3",
    title: "Zeus and the Olympians",
    culture: "Greek",
    country: "Greece",
    countryFlag: "🇬🇷",
    category: "Mythology",
    excerpt: "The king of the Olympian gods, Zeus ruled the heavens with his thunderbolt. His complex relationships with mortals and gods alike shaped the ancient Greek world...",
    fullText: "Zeus, the king of the Olympian gods, ruled from Mount Olympus along with eleven other major deities. Born from the Titans Cronus and Rhea, Zeus overthrew his father and divided the world with his brothers Poseidon (sea) and Hades (underworld). Known for his thunderbolt and his many unions with both mortals and immortals, Zeus fathered many heroes and demigods including Heracles, Perseus, and Apollo. His authority over the cosmos parallels Indra in Hindu mythology and Jupiter in Roman mythology — both thunder gods who preside over the heavens and enforce divine order. The similarity between these deities across cultures suggests a shared Proto-Indo-European pantheon.",
    tags: ["Olympus", "thunder", "sovereignty", "Proto-Indo-European"],
    similarCultures: ["Roman (Jupiter)", "Hindu (Indra)", "Norse (Odin/Thor)"],
    ritualsSection: "Olympic Games were held every four years in honor of Zeus at Olympia. The Oracle of Delphi served as Zeus's mouthpiece."
  },
  {
    id: "s4",
    title: "Prometheus — The Fire Bringer",
    culture: "Greek",
    country: "Greece",
    countryFlag: "🇬🇷",
    category: "Mythology",
    excerpt: "Prometheus defied the gods and stole fire from Mount Olympus to give to humanity. For his act of compassion, he was condemned to eternal punishment...",
    fullText: "Prometheus, whose name means 'forethought,' was a Titan who championed humanity. Against the will of Zeus, he stole fire from the forge of Hephaestus and gave it to humans, enabling civilization. For this transgression, Zeus had him chained to a rock where an eagle ate his liver each day, only for it to regenerate overnight — a cycle of perpetual suffering. Finally freed by Heracles, Prometheus became a symbol of enlightenment, rebellion against tyranny, and sacrifice for the greater good. His story resonates across cultures — the Hindu Matarisvan who brought fire to humans, the Japanese fox Kitsune tales, and Polynesian myths of Maui who snared the sun all echo the motif of a trickster-benefactor bridging the divine and human.",
    tags: ["fire", "sacrifice", "civilization", "rebellion"],
    similarCultures: [
      "Hindu (Matarisvan)",
      "Polynesian (Maui)",
      "Cherokee (Grandmother Spider)"
    ]
  },
  {
    id: "s5",
    title: "Odin — The All-Father of Norse Mythology",
    culture: "Norse",
    country: "Scandinavia",
    countryFlag: "🇳🇴",
    category: "Mythology",
    excerpt: "Odin sacrificed his eye at the Well of Mimir for wisdom, and hung himself on Yggdrasil for nine days to learn the secrets of the runes — the original seeker of knowledge...",
    fullText: "Odin, the All-Father, rules Asgard and is the god of wisdom, war, death, magic, poetry, and prophecy. He sacrificed his eye to Mimir's well to gain cosmic wisdom. In his most famous act, he hung himself on the world tree Yggdrasil for nine days and nine nights, wounded by his own spear, to gain knowledge of the runes. He rides the eight-legged horse Sleipnir and is accompanied by his ravens Huginn (Thought) and Muninn (Memory) who bring him news from all realms. His pursuit of wisdom at great personal cost parallels Shiva's tapas (austerities) in Hindu mythology and Tiresias in Greek myth. Odin's sacrifice also echoes shamanic initiation rites found across Siberian and Central Asian cultures.",
    tags: ["wisdom", "sacrifice", "runes", "Yggdrasil"],
    similarCultures: ["Hindu (Shiva)", "Greek (Hermes)", "Siberian shamanism"],
    ritualsSection: "Blót sacrifices were offered to Odin, especially at Midwinter (Yule). Wednesday is named after Woden/Odin."
  },
  {
    id: "s6",
    title: "Ra and the Solar Boat — Egyptian Sun Mythology",
    culture: "Egyptian",
    country: "Egypt",
    countryFlag: "🇪🇬",
    category: "Mythology",
    excerpt: "Every night, the sun god Ra sailed through the underworld Duat in his sacred boat, battling the serpent Apophis to ensure the sun would rise again each morning...",
    fullText: "Ra, the ancient Egyptian sun god, was the most important deity in the Egyptian pantheon for much of its history. Each day he sailed across the sky in the Mandjet (day boat) and each night in the Mesektet (night boat) through the dangerous underworld Duat. During the night journey, Ra transformed into Auf (the flesh of Ra) and battled the chaos serpent Apophis who sought to swallow the sun and prevent its daily rebirth. The cosmic battle between Ra and Apophis mirrors the eternal conflict between order (Ma'at) and chaos. This solar mythology parallels the Hindu story of the chariot of Surya crossing the heavens, the Greek Helios riding his sun-chariot, and the Norse Sol driving the sun across the sky — ancient humanity's universal need to explain the daily solar cycle.",
    tags: ["sun", "solar boat", "rebirth", "Apophis"],
    similarCultures: [
      "Hindu (Surya)",
      "Greek (Helios)",
      "Norse (Sol)",
      "Aztec (Tonatiuh)"
    ],
    ritualsSection: "The Opet Festival honored Ra and Amun. Daily temple rituals re-enacted Ra's solar journey to ensure cosmic order."
  },
  {
    id: "s7",
    title: "Amaterasu — The Japanese Sun Goddess",
    culture: "Shinto",
    country: "Japan",
    countryFlag: "🇯🇵",
    category: "Mythology",
    excerpt: "When Amaterasu hid in a cave plunging the world into darkness, the gods devised a plan to lure her out with laughter, restoring light to the universe...",
    fullText: "Amaterasu Omikami is the Japanese goddess of the sun and the universe, considered the highest deity in the Shinto pantheon and the ancestor of the Japanese imperial family. When her brother Susanoo's violent behavior caused her grief, she retreated into the Ama-no-Iwato cave, plunging the world into darkness. The other gods, missing her light, devised a plan — the goddess Ame-no-Uzume performed a comic and ecstatic dance that caused the assembled gods to burst into laughter. Curious about what could cause such merriment in a dark world, Amaterasu peeked out and was pulled from the cave, restoring light. This myth reflects the Japanese cultural value of communal laughter and joy as forces that overcome darkness — a theme echoed in many cultures' myths about light restoration.",
    tags: ["sun goddess", "Shinto", "imperial lineage", "cave"],
    similarCultures: [
      "Hindu (Surya)",
      "Greek (Demeter/Persephone)",
      "Norse (Sol)"
    ],
    ritualsSection: "Ise Jingu (Grand Shrine) is dedicated to Amaterasu. Shichi-Go-San and Shinto matsuri festivals honor her light."
  },
  {
    id: "s8",
    title: "Jade Emperor — Ruler of Heaven in Chinese Mythology",
    culture: "Chinese",
    country: "China",
    countryFlag: "🇨🇳",
    category: "Mythology",
    excerpt: "The Jade Emperor rules the celestial court with millions of divine bureaucrats, overseeing everything from the afterlife to earthly government in a cosmic hierarchy...",
    fullText: "The Jade Emperor (Yù Huáng Dàdì) is the supreme ruler of Heaven in Chinese mythology and folk religion. He oversees a vast celestial bureaucracy that mirrors the imperial government of dynastic China. Below him are countless deities, each responsible for specific aspects of the world — the Earth God (Tǔdì Gōng) for local areas, the Kitchen God (Zàoshén) for households, and the Dragon Kings for rivers and seas. The Jade Emperor's birthday is celebrated on the ninth day of the first lunar month. This concept of a heavenly bureaucracy with specialized divine administrators finds interesting parallels in Hindu mythology's concept of the Devas with specific portfolios, Mesopotamian divine councils, and even the Greek pantheon's division of cosmic domains.",
    tags: ["celestial court", "bureaucracy", "Taoism", "folk religion"],
    similarCultures: [
      "Hindu (Indra's court)",
      "Greek (Olympian council)",
      "Mesopotamian (divine assembly)"
    ],
    ritualsSection: "Chinese New Year begins with offerings to the Jade Emperor. Kitchen God is sent to heaven on the 23rd day of the 12th lunar month."
  },
  {
    id: "s9",
    title: "Quetzalcoatl — The Feathered Serpent",
    culture: "Aztec",
    country: "Mexico",
    countryFlag: "🇲🇽",
    category: "Mythology",
    excerpt: "The feathered serpent god Quetzalcoatl brought corn and civilization to humanity, then departed promising to return — a prophecy that would later intersect dramatically with history...",
    fullText: "Quetzalcoatl ('feathered serpent') was one of the most important deities in ancient Mesoamerica, worshipped by the Aztecs, Toltecs, and other cultures. He was associated with wind, air, learning, arts, and the dawn. In Aztec mythology, he and Tezcatlipoca created the world and the current age of humanity. Quetzalcoatl is credited with giving humans corn, the calendar, and writing. His feathered serpent form combines the quetzal bird (heavenly) and the rattlesnake (earthly) — symbolizing the union of heaven and earth, a theme found in the Hindu Naga (serpent deity), the Egyptian uraeus, and Chinese dragon mythology. The legend of his promised return from the east was tragically exploited when Hernán Cortés arrived, initially mistaken by some as the returning god.",
    tags: ["feathered serpent", "creation", "corn", "Venus"],
    similarCultures: [
      "Hindu (Naga serpents)",
      "Egyptian (Wadjet)",
      "Chinese (Dragon)"
    ],
    ritualsSection: "The Festival of Quetzalcoatl involved ceremonial ball games and offerings. Priests wore conical hats in his honor."
  },
  {
    id: "s10",
    title: "Anansi — The Spider Trickster of West Africa",
    culture: "Akan / West African",
    country: "Ghana",
    countryFlag: "🇬🇭",
    category: "Mythology",
    excerpt: "Anansi the spider outsmarted the Sky God Nyame to acquire all the world's stories for humanity, cementing his place as the god of wisdom, stories, and cunning...",
    fullText: "Anansi (or Ananse) is the spider trickster figure from Akan mythology in West Africa, particularly Ghana. He is the god of all knowledge of stories and is often depicted as a spider, though he can take human form. In the most famous tale, Anansi approaches Nyame, the Sky God, and asks to buy all the world's stories. Nyame sets an impossible price: capture the hornets, the python, and the leopard. Through ingenuity, Anansi succeeds, becoming the keeper of all stories. This tale of a small creature outwitting powerful beings resonates universally — in the trickster figures of Coyote (Native American), Br'er Rabbit (African-American), Loki (Norse), and Narada (Hindu). When enslaved Africans were taken to the Americas, Anansi stories traveled with them and evolved into Br'er Rabbit tales.",
    tags: ["trickster", "stories", "spider", "cunning"],
    similarCultures: [
      "Hindu (Narada)",
      "Norse (Loki)",
      "Native American (Coyote)",
      "African-American (Br'er Rabbit)"
    ],
    ritualsSection: "Anansi is invoked at storytelling ceremonies. His tales are used to teach moral lessons to children across West Africa."
  },
  {
    id: "s11",
    title: "The Epic of Gilgamesh — The First Hero",
    culture: "Mesopotamian / Sumerian",
    country: "Iraq (Ancient Sumer)",
    countryFlag: "🇮🇶",
    category: "Mythology",
    excerpt: "The world's oldest written epic tells of King Gilgamesh's quest for immortality after losing his beloved companion Enkidu — and contains a flood myth strikingly similar to Noah's...",
    fullText: "The Epic of Gilgamesh, composed around 2100 BCE, is the world's oldest known piece of epic literature. It follows Gilgamesh, the semi-divine king of Uruk, and his friendship with the wild man Enkidu. When Enkidu dies, Gilgamesh is overcome with grief and fear of death, embarking on a quest for immortality. He finds Utnapishtim, a mortal who survived the great flood by building a large boat on the gods' instructions, and was granted immortality. Utnapishtim's story — building an ark, loading animals, the flood lasting seven days, sending out a dove — is strikingly similar to the biblical Noah and the Hindu story of Manu who was warned by Vishnu (in the form of a fish) to build a boat before the great flood. This convergence across Sumerian, Hebrew, and Hindu traditions suggests either shared cultural memory, common ancient events, or universal human storytelling themes.",
    tags: ["immortality", "flood myth", "friendship", "ancient"],
    similarCultures: [
      "Hindu (Manu)",
      "Hebrew (Noah)",
      "Greek (Deucalion)",
      "Chinese (Gun-Yu)"
    ],
    ritualsSection: "The New Year festival Akitu in ancient Sumer involved recitation of the Gilgamesh epic. Cedar forest was sacred in Mesopotamian cosmology."
  },
  {
    id: "s12",
    title: "Dagda — The Good God of Celtic Ireland",
    culture: "Celtic / Irish",
    country: "Ireland",
    countryFlag: "🇮🇪",
    category: "Mythology",
    excerpt: "The Dagda possessed a magical cauldron that could feed all of Ireland without emptying, a club that could kill and resurrect, and a harp that controlled the seasons...",
    fullText: "The Dagda ('Good God') is the chief deity of the Tuatha Dé Danann in Irish mythology. He is a father figure and protector of the tribe, associated with agriculture, wisdom, and time. His three magical possessions define his power: a cauldron of plenty that never empties (paralleling the Hindu Akshayapatra), a massive club that can kill the living and resurrect the dead with its handle (paralleling Shiva's trishula and Odin's spear Gungnir), and a magical harp called Uaithne that could control the seasons and human emotions. The cauldron of plenty appears across many mythologies — the Holy Grail in Christian legend, the cornucopia in Greek myth, and the samudra manthan (churning of the ocean) producing Amrita in Hindu tradition. These parallel myths of divine abundance suggest universal human longing for inexhaustible nourishment.",
    tags: ["Celtic", "cauldron", "abundance", "Father god"],
    similarCultures: [
      "Hindu (Brahma/Shiva)",
      "Norse (Thor)",
      "Greek (Cronus/Dionysus)"
    ],
    ritualsSection: "Samhain (Halloween) has roots in Celtic festivals. The Dagda's union with the Morrigan at Samhain was a cosmic renewal ritual."
  }
];
const CROSS_CULTURE_CONNECTIONS = [
  {
    theme: "The Great Flood",
    count: 12,
    cultures: [
      "Hindu (Manu)",
      "Hebrew (Noah)",
      "Mesopotamian (Utnapishtim)",
      "Greek (Deucalion)",
      "Chinese (Gun-Yu)",
      "Aztec",
      "Norse"
    ],
    description: "A catastrophic flood sent by the divine, survived by one righteous person/family on a boat, appears across virtually every ancient civilization."
  },
  {
    theme: "Creation through Cosmic Sacrifice",
    count: 8,
    cultures: [
      "Hindu (Purusha)",
      "Norse (Ymir)",
      "Mesopotamian (Tiamat)",
      "Chinese (Pangu)",
      "Aztec (Cipactli)"
    ],
    description: "The world is created from the body of a primordial being — the macrocosm emerges from the sacrifice of the microcosm."
  },
  {
    theme: "Thunder Gods",
    count: 10,
    cultures: [
      "Hindu (Indra)",
      "Greek (Zeus)",
      "Roman (Jupiter)",
      "Norse (Thor)",
      "Slavic (Perun)",
      "Shinto (Raijin)"
    ],
    description: "Proto-Indo-European mythology likely originated the thunder god archetype — a chief deity wielding lightning who maintains cosmic order."
  },
  {
    theme: "Sun Gods / Solar Boats",
    count: 9,
    cultures: [
      "Egyptian (Ra)",
      "Hindu (Surya)",
      "Greek (Helios/Apollo)",
      "Norse (Sol)",
      "Japanese (Amaterasu)",
      "Aztec (Tonatiuh)"
    ],
    description: "Ancient cultures universally worshipped the sun and created myths to explain the daily solar cycle, often as a divine journey."
  },
  {
    theme: "Trickster Gods",
    count: 15,
    cultures: [
      "Hindu (Narada)",
      "Norse (Loki)",
      "West African (Anansi)",
      "Native American (Coyote)",
      "Greek (Hermes)",
      "African-American (Br'er Rabbit)"
    ],
    description: "Every mythology features a trickster — a figure who disrupts, challenges, and ultimately teaches through chaos and cunning."
  },
  {
    theme: "World Tree / Cosmic Axis",
    count: 7,
    cultures: [
      "Norse (Yggdrasil)",
      "Hindu (Ashvattha)",
      "Mayan (Ceiba)",
      "Siberian (Shaman's tree)",
      "Egyptian (Djed pillar)"
    ],
    description: "The concept of a sacred tree or pillar connecting the underworld, earth, and heavens appears across unconnected ancient cultures."
  }
];
const CULTURE_COLORS = {
  Hindu: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
  Greek: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  Norse: "bg-slate-100 text-slate-800 dark:bg-slate-700/40 dark:text-slate-300",
  Egyptian: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  Shinto: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400",
  Chinese: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  Aztec: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  "Celtic / Irish": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Akan / West African": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  "Mesopotamian / Sumerian": "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-400"
};
function SpiritualStoriesPage() {
  const [activeTab, setActiveTab] = reactExports.useState("stories");
  const [search, setSearch] = reactExports.useState("");
  const [regionFilter, setRegionFilter] = reactExports.useState("all");
  const [categoryFilter, setCategoryFilter] = reactExports.useState("all");
  const [selectedStory, setSelectedStory] = reactExports.useState(null);
  const filteredStories = STORIES.filter((s) => {
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase()) || s.culture.toLowerCase().includes(search.toLowerCase()) || s.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchRegion = regionFilter === "all" || s.country.toLowerCase().includes(regionFilter.toLowerCase()) || s.culture.toLowerCase().includes(regionFilter.toLowerCase());
    const matchCat = categoryFilter === "all" || s.category === categoryFilter;
    return matchSearch && matchRegion && matchCat;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen pb-12", "data-ocid": "spiritual.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative px-6 py-10 text-center overflow-hidden",
        style: {
          background: "linear-gradient(135deg, oklch(0.28 0.08 280 / 0.9) 0%, oklch(0.35 0.12 320 / 0.85) 50%, oklch(0.32 0.10 50 / 0.9) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-10",
              style: {
                backgroundImage: "radial-gradient(circle at 20% 50%, oklch(0.8 0.15 60) 0%, transparent 50%), radial-gradient(circle at 80% 20%, oklch(0.7 0.2 280) 0%, transparent 50%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-2xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 22, className: "text-amber-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-amber-300", children: "Curated by Agent 21" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl font-display font-bold text-white mb-3", children: "Spiritual & Mythological Stories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/70", children: "Explore myths, rituals, and beliefs across cultures — discover the threads that connect all of humanity" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TabsList,
        {
          className: "mb-6 grid grid-cols-4 w-full max-w-lg",
          "data-ocid": "spiritual.tab",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "stories", "data-ocid": "spiritual.stories.tab", children: "Stories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "rituals", "data-ocid": "spiritual.rituals.tab", children: "Rituals" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TabsTrigger,
              {
                value: "connections",
                "data-ocid": "spiritual.connections.tab",
                children: "Connections"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "regions", "data-ocid": "spiritual.regions.tab", children: "By Region" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "stories", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-48", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Search,
              {
                size: 14,
                className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                className: "pl-8 h-9 text-sm",
                placeholder: "Search stories, cultures...",
                value: search,
                onChange: (e) => setSearch(e.target.value),
                "data-ocid": "spiritual.search_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: regionFilter, onValueChange: setRegionFilter, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "h-9 w-44 text-sm",
                "data-ocid": "spiritual.region.select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All Regions" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Regions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "India", children: "India / Hindu" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Greece", children: "Greece / Greek" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Norse", children: "Norse / Scandinavia" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Egypt", children: "Egypt" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Japan", children: "Japan / Shinto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "China", children: "China / Chinese" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Mexico", children: "Aztec / Maya" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Celtic", children: "Celtic / Irish" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Ghana", children: "West Africa" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Iraq", children: "Mesopotamian" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: categoryFilter, onValueChange: setCategoryFilter, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "h-9 w-44 text-sm",
                "data-ocid": "spiritual.category.select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All Categories" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Categories" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Mythology", children: "Mythology" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Rituals", children: "Rituals" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Beliefs", children: "Beliefs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Similarities", children: "Similarities" })
            ] })
          ] })
        ] }),
        filteredStories.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center py-16 text-muted-foreground",
            "data-ocid": "spiritual.stories.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 40, className: "mx-auto mb-3 opacity-30" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No stories found for your filter." })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: filteredStories.map((story, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer",
            onClick: () => setSelectedStory(story),
            "data-ocid": `spiritual.stories.item.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: story.countryFlag }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: `text-[10px] shrink-0 ${CULTURE_COLORS[story.culture] ?? "bg-primary/10 text-primary"}`,
                    children: story.culture
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm leading-snug", children: story.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-3", children: story.excerpt }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: story.tags.slice(0, 2).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground",
                    children: tag
                  },
                  tag
                )) }),
                story.similarCultures && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[10px] text-primary", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { size: 10 }),
                  story.similarCultures.length,
                  " links"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "ghost",
                  className: "w-full h-7 text-xs",
                  onClick: (e) => {
                    e.stopPropagation();
                    setSelectedStory(story);
                  },
                  "data-ocid": `spiritual.stories.read_button.${i + 1}`,
                  children: "Read More →"
                }
              )
            ] })
          },
          story.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "rituals", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Discover the rituals and belief systems that shape daily life, festivals, and ceremonies across cultures." }),
        STORIES.filter((s) => s.ritualsSection).map((story, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            "data-ocid": `spiritual.rituals.item.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl shrink-0", children: story.countryFlag }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold", children: story.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: `text-[10px] ${CULTURE_COLORS[story.culture] ?? "bg-primary/10 text-primary"}`,
                      children: story.culture
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: story.ritualsSection })
              ] })
            ] })
          },
          story.id
        ))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "connections", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold mb-1", children: "Cross-Culture Connections" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "These universal themes appear across unrelated cultures, suggesting shared human experience or ancient common roots." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: CROSS_CULTURE_CONNECTIONS.map((conn, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            "data-ocid": `spiritual.connections.item.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm", children: conn.theme }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full", children: [
                  conn.count,
                  " cultures"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: conn.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: conn.cultures.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border",
                  children: c
                },
                c
              )) })
            ] })
          },
          conn.theme
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "regions", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: [
        "India",
        "Greece",
        "Scandinavia",
        "Egypt",
        "Japan",
        "China",
        "Mexico",
        "Ireland",
        "Ghana",
        "Iraq (Ancient Sumer)"
      ].map((region) => {
        var _a;
        const regionStories = STORIES.filter(
          (s) => s.country === region || s.culture.includes(region.split(" ")[0])
        );
        if (regionStories.length === 0) return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base font-display font-bold mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (_a = regionStories[0]) == null ? void 0 : _a.countryFlag }),
            " ",
            region
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: regionStories.map((story, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              className: "cursor-pointer hover:shadow-md transition-shadow",
              onClick: () => setSelectedStory(story),
              "data-ocid": `spiritual.regions.item.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold mb-1 leading-snug", children: story.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2", children: story.excerpt })
              ] })
            },
            story.id
          )) })
        ] }, region);
      }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!selectedStory,
        onOpenChange: (v) => !v && setSelectedStory(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DialogContent,
          {
            className: "max-w-2xl max-h-[85vh] overflow-y-auto",
            "data-ocid": "spiritual.story.dialog",
            children: selectedStory && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: selectedStory.countryFlag }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: `text-[10px] ${CULTURE_COLORS[selectedStory.culture] ?? "bg-primary/10 text-primary"}`,
                      children: selectedStory.culture
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display text-lg leading-snug", children: selectedStory.title })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-foreground", children: selectedStory.fullText }),
                selectedStory.ritualsSection && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-secondary/50 p-4 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Associated Rituals & Festivals" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: selectedStory.ritualsSection })
                ] }),
                selectedStory.similarCultures && selectedStory.similarCultures.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-semibold uppercase tracking-wide text-primary flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { size: 12 }),
                    " Cultural Connections"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: selectedStory.similarCultures.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20",
                      children: c
                    },
                    c
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 pt-1", children: selectedStory.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "text-[10px] px-2 py-0.5 rounded bg-secondary text-muted-foreground",
                    children: [
                      "#",
                      tag
                    ]
                  },
                  tag
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: () => setSelectedStory(null),
                  "data-ocid": "spiritual.story.close_button",
                  children: "Close"
                }
              ) })
            ] })
          }
        )
      }
    )
  ] });
}
export {
  SpiritualStoriesPage as default
};

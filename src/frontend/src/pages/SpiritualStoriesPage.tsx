import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Link2, Search, Sparkles } from "lucide-react";
import { useState } from "react";

interface Story {
  id: string;
  title: string;
  culture: string;
  country: string;
  countryFlag: string;
  category: "Mythology" | "Rituals" | "Beliefs" | "Similarities";
  excerpt: string;
  fullText: string;
  tags: string[];
  similarCultures?: string[];
  ritualsSection?: string;
}

const STORIES: Story[] = [
  {
    id: "s1",
    title: "Ramayana — The Epic Journey of Rama",
    culture: "Hindu",
    country: "India",
    countryFlag: "🇮🇳",
    category: "Mythology",
    excerpt:
      "The story of Prince Rama, his exile into the forest, the abduction of his wife Sita by the demon king Ravana, and his triumphant return after the great battle...",
    fullText:
      "The Ramayana is one of the two great epics of ancient India. It tells the story of Prince Rama of Ayodhya, who is exiled to the forest for 14 years along with his wife Sita and his devoted brother Lakshmana. When the demon king Ravana abducts Sita and takes her to Lanka, Rama allies with the monkey king Sugriva and the mighty Hanuman to rescue her. The climactic battle between Rama's army and Ravana's forces culminates in the defeat of Ravana and the liberation of Sita. The epic explores themes of dharma (righteousness), devotion, loyalty, and the triumph of good over evil. The Ramayana has profoundly influenced Southeast Asian cultures, with versions found in Thailand (Ramakien), Cambodia, Indonesia, and as far as Malaysia.",
    tags: ["epic", "dharma", "Vishnu", "avatar"],
    similarCultures: [
      "Thai (Ramakien)",
      "Khmer",
      "Indonesian (Kakawin Ramayana)",
    ],
    ritualsSection:
      "Diwali celebrates Rama's return to Ayodhya. Ram Navami marks his birth. Hanuman Jayanti honors his devotee.",
  },
  {
    id: "s2",
    title: "The Mahabharata — The War of Dharma",
    culture: "Hindu",
    country: "India",
    countryFlag: "🇮🇳",
    category: "Mythology",
    excerpt:
      "The great war between the Pandavas and the Kauravas at Kurukshetra, where Lord Krishna delivered the Bhagavad Gita — the song of the Divine...",
    fullText:
      "The Mahabharata is the world's longest epic poem, containing the Bhagavad Gita within it. The narrative follows the conflict between two groups of royal cousins — the five Pandavas and their hundred Kaurava cousins — for the throne of Hastinapura. The 18-day Kurukshetra War is the central event. Before the battle begins, the warrior Arjuna is overcome with doubt and grief at the prospect of fighting his kinsmen. Lord Krishna, his charioteer, delivers the Bhagavad Gita — a 700-verse dialogue on duty, righteousness, devotion, and the nature of the soul. The text explores profound philosophical questions about free will, cosmic order, and the soul's immortality.",
    tags: ["Bhagavad Gita", "Krishna", "Pandavas", "dharma"],
    similarCultures: ["Greek (Trojan War themes)", "Norse (Ragnarok)"],
    ritualsSection:
      "Gita Jayanti marks the day Krishna delivered the Bhagavad Gita. Makar Sankranti coincides with Bhishma Pitamah's departure.",
  },
  {
    id: "s3",
    title: "Zeus and the Olympians",
    culture: "Greek",
    country: "Greece",
    countryFlag: "🇬🇷",
    category: "Mythology",
    excerpt:
      "The king of the Olympian gods, Zeus ruled the heavens with his thunderbolt. His complex relationships with mortals and gods alike shaped the ancient Greek world...",
    fullText:
      "Zeus, the king of the Olympian gods, ruled from Mount Olympus along with eleven other major deities. Born from the Titans Cronus and Rhea, Zeus overthrew his father and divided the world with his brothers Poseidon (sea) and Hades (underworld). Known for his thunderbolt and his many unions with both mortals and immortals, Zeus fathered many heroes and demigods including Heracles, Perseus, and Apollo. His authority over the cosmos parallels Indra in Hindu mythology and Jupiter in Roman mythology — both thunder gods who preside over the heavens and enforce divine order. The similarity between these deities across cultures suggests a shared Proto-Indo-European pantheon.",
    tags: ["Olympus", "thunder", "sovereignty", "Proto-Indo-European"],
    similarCultures: ["Roman (Jupiter)", "Hindu (Indra)", "Norse (Odin/Thor)"],
    ritualsSection:
      "Olympic Games were held every four years in honor of Zeus at Olympia. The Oracle of Delphi served as Zeus's mouthpiece.",
  },
  {
    id: "s4",
    title: "Prometheus — The Fire Bringer",
    culture: "Greek",
    country: "Greece",
    countryFlag: "🇬🇷",
    category: "Mythology",
    excerpt:
      "Prometheus defied the gods and stole fire from Mount Olympus to give to humanity. For his act of compassion, he was condemned to eternal punishment...",
    fullText:
      "Prometheus, whose name means 'forethought,' was a Titan who championed humanity. Against the will of Zeus, he stole fire from the forge of Hephaestus and gave it to humans, enabling civilization. For this transgression, Zeus had him chained to a rock where an eagle ate his liver each day, only for it to regenerate overnight — a cycle of perpetual suffering. Finally freed by Heracles, Prometheus became a symbol of enlightenment, rebellion against tyranny, and sacrifice for the greater good. His story resonates across cultures — the Hindu Matarisvan who brought fire to humans, the Japanese fox Kitsune tales, and Polynesian myths of Maui who snared the sun all echo the motif of a trickster-benefactor bridging the divine and human.",
    tags: ["fire", "sacrifice", "civilization", "rebellion"],
    similarCultures: [
      "Hindu (Matarisvan)",
      "Polynesian (Maui)",
      "Cherokee (Grandmother Spider)",
    ],
  },
  {
    id: "s5",
    title: "Odin — The All-Father of Norse Mythology",
    culture: "Norse",
    country: "Scandinavia",
    countryFlag: "🇳🇴",
    category: "Mythology",
    excerpt:
      "Odin sacrificed his eye at the Well of Mimir for wisdom, and hung himself on Yggdrasil for nine days to learn the secrets of the runes — the original seeker of knowledge...",
    fullText:
      "Odin, the All-Father, rules Asgard and is the god of wisdom, war, death, magic, poetry, and prophecy. He sacrificed his eye to Mimir's well to gain cosmic wisdom. In his most famous act, he hung himself on the world tree Yggdrasil for nine days and nine nights, wounded by his own spear, to gain knowledge of the runes. He rides the eight-legged horse Sleipnir and is accompanied by his ravens Huginn (Thought) and Muninn (Memory) who bring him news from all realms. His pursuit of wisdom at great personal cost parallels Shiva's tapas (austerities) in Hindu mythology and Tiresias in Greek myth. Odin's sacrifice also echoes shamanic initiation rites found across Siberian and Central Asian cultures.",
    tags: ["wisdom", "sacrifice", "runes", "Yggdrasil"],
    similarCultures: ["Hindu (Shiva)", "Greek (Hermes)", "Siberian shamanism"],
    ritualsSection:
      "Blót sacrifices were offered to Odin, especially at Midwinter (Yule). Wednesday is named after Woden/Odin.",
  },
  {
    id: "s6",
    title: "Ra and the Solar Boat — Egyptian Sun Mythology",
    culture: "Egyptian",
    country: "Egypt",
    countryFlag: "🇪🇬",
    category: "Mythology",
    excerpt:
      "Every night, the sun god Ra sailed through the underworld Duat in his sacred boat, battling the serpent Apophis to ensure the sun would rise again each morning...",
    fullText:
      "Ra, the ancient Egyptian sun god, was the most important deity in the Egyptian pantheon for much of its history. Each day he sailed across the sky in the Mandjet (day boat) and each night in the Mesektet (night boat) through the dangerous underworld Duat. During the night journey, Ra transformed into Auf (the flesh of Ra) and battled the chaos serpent Apophis who sought to swallow the sun and prevent its daily rebirth. The cosmic battle between Ra and Apophis mirrors the eternal conflict between order (Ma'at) and chaos. This solar mythology parallels the Hindu story of the chariot of Surya crossing the heavens, the Greek Helios riding his sun-chariot, and the Norse Sol driving the sun across the sky — ancient humanity's universal need to explain the daily solar cycle.",
    tags: ["sun", "solar boat", "rebirth", "Apophis"],
    similarCultures: [
      "Hindu (Surya)",
      "Greek (Helios)",
      "Norse (Sol)",
      "Aztec (Tonatiuh)",
    ],
    ritualsSection:
      "The Opet Festival honored Ra and Amun. Daily temple rituals re-enacted Ra's solar journey to ensure cosmic order.",
  },
  {
    id: "s7",
    title: "Amaterasu — The Japanese Sun Goddess",
    culture: "Shinto",
    country: "Japan",
    countryFlag: "🇯🇵",
    category: "Mythology",
    excerpt:
      "When Amaterasu hid in a cave plunging the world into darkness, the gods devised a plan to lure her out with laughter, restoring light to the universe...",
    fullText:
      "Amaterasu Omikami is the Japanese goddess of the sun and the universe, considered the highest deity in the Shinto pantheon and the ancestor of the Japanese imperial family. When her brother Susanoo's violent behavior caused her grief, she retreated into the Ama-no-Iwato cave, plunging the world into darkness. The other gods, missing her light, devised a plan — the goddess Ame-no-Uzume performed a comic and ecstatic dance that caused the assembled gods to burst into laughter. Curious about what could cause such merriment in a dark world, Amaterasu peeked out and was pulled from the cave, restoring light. This myth reflects the Japanese cultural value of communal laughter and joy as forces that overcome darkness — a theme echoed in many cultures' myths about light restoration.",
    tags: ["sun goddess", "Shinto", "imperial lineage", "cave"],
    similarCultures: [
      "Hindu (Surya)",
      "Greek (Demeter/Persephone)",
      "Norse (Sol)",
    ],
    ritualsSection:
      "Ise Jingu (Grand Shrine) is dedicated to Amaterasu. Shichi-Go-San and Shinto matsuri festivals honor her light.",
  },
  {
    id: "s8",
    title: "Jade Emperor — Ruler of Heaven in Chinese Mythology",
    culture: "Chinese",
    country: "China",
    countryFlag: "🇨🇳",
    category: "Mythology",
    excerpt:
      "The Jade Emperor rules the celestial court with millions of divine bureaucrats, overseeing everything from the afterlife to earthly government in a cosmic hierarchy...",
    fullText:
      "The Jade Emperor (Yù Huáng Dàdì) is the supreme ruler of Heaven in Chinese mythology and folk religion. He oversees a vast celestial bureaucracy that mirrors the imperial government of dynastic China. Below him are countless deities, each responsible for specific aspects of the world — the Earth God (Tǔdì Gōng) for local areas, the Kitchen God (Zàoshén) for households, and the Dragon Kings for rivers and seas. The Jade Emperor's birthday is celebrated on the ninth day of the first lunar month. This concept of a heavenly bureaucracy with specialized divine administrators finds interesting parallels in Hindu mythology's concept of the Devas with specific portfolios, Mesopotamian divine councils, and even the Greek pantheon's division of cosmic domains.",
    tags: ["celestial court", "bureaucracy", "Taoism", "folk religion"],
    similarCultures: [
      "Hindu (Indra's court)",
      "Greek (Olympian council)",
      "Mesopotamian (divine assembly)",
    ],
    ritualsSection:
      "Chinese New Year begins with offerings to the Jade Emperor. Kitchen God is sent to heaven on the 23rd day of the 12th lunar month.",
  },
  {
    id: "s9",
    title: "Quetzalcoatl — The Feathered Serpent",
    culture: "Aztec",
    country: "Mexico",
    countryFlag: "🇲🇽",
    category: "Mythology",
    excerpt:
      "The feathered serpent god Quetzalcoatl brought corn and civilization to humanity, then departed promising to return — a prophecy that would later intersect dramatically with history...",
    fullText:
      "Quetzalcoatl ('feathered serpent') was one of the most important deities in ancient Mesoamerica, worshipped by the Aztecs, Toltecs, and other cultures. He was associated with wind, air, learning, arts, and the dawn. In Aztec mythology, he and Tezcatlipoca created the world and the current age of humanity. Quetzalcoatl is credited with giving humans corn, the calendar, and writing. His feathered serpent form combines the quetzal bird (heavenly) and the rattlesnake (earthly) — symbolizing the union of heaven and earth, a theme found in the Hindu Naga (serpent deity), the Egyptian uraeus, and Chinese dragon mythology. The legend of his promised return from the east was tragically exploited when Hernán Cortés arrived, initially mistaken by some as the returning god.",
    tags: ["feathered serpent", "creation", "corn", "Venus"],
    similarCultures: [
      "Hindu (Naga serpents)",
      "Egyptian (Wadjet)",
      "Chinese (Dragon)",
    ],
    ritualsSection:
      "The Festival of Quetzalcoatl involved ceremonial ball games and offerings. Priests wore conical hats in his honor.",
  },
  {
    id: "s10",
    title: "Anansi — The Spider Trickster of West Africa",
    culture: "Akan / West African",
    country: "Ghana",
    countryFlag: "🇬🇭",
    category: "Mythology",
    excerpt:
      "Anansi the spider outsmarted the Sky God Nyame to acquire all the world's stories for humanity, cementing his place as the god of wisdom, stories, and cunning...",
    fullText:
      "Anansi (or Ananse) is the spider trickster figure from Akan mythology in West Africa, particularly Ghana. He is the god of all knowledge of stories and is often depicted as a spider, though he can take human form. In the most famous tale, Anansi approaches Nyame, the Sky God, and asks to buy all the world's stories. Nyame sets an impossible price: capture the hornets, the python, and the leopard. Through ingenuity, Anansi succeeds, becoming the keeper of all stories. This tale of a small creature outwitting powerful beings resonates universally — in the trickster figures of Coyote (Native American), Br'er Rabbit (African-American), Loki (Norse), and Narada (Hindu). When enslaved Africans were taken to the Americas, Anansi stories traveled with them and evolved into Br'er Rabbit tales.",
    tags: ["trickster", "stories", "spider", "cunning"],
    similarCultures: [
      "Hindu (Narada)",
      "Norse (Loki)",
      "Native American (Coyote)",
      "African-American (Br'er Rabbit)",
    ],
    ritualsSection:
      "Anansi is invoked at storytelling ceremonies. His tales are used to teach moral lessons to children across West Africa.",
  },
  {
    id: "s11",
    title: "The Epic of Gilgamesh — The First Hero",
    culture: "Mesopotamian / Sumerian",
    country: "Iraq (Ancient Sumer)",
    countryFlag: "🇮🇶",
    category: "Mythology",
    excerpt:
      "The world's oldest written epic tells of King Gilgamesh's quest for immortality after losing his beloved companion Enkidu — and contains a flood myth strikingly similar to Noah's...",
    fullText:
      "The Epic of Gilgamesh, composed around 2100 BCE, is the world's oldest known piece of epic literature. It follows Gilgamesh, the semi-divine king of Uruk, and his friendship with the wild man Enkidu. When Enkidu dies, Gilgamesh is overcome with grief and fear of death, embarking on a quest for immortality. He finds Utnapishtim, a mortal who survived the great flood by building a large boat on the gods' instructions, and was granted immortality. Utnapishtim's story — building an ark, loading animals, the flood lasting seven days, sending out a dove — is strikingly similar to the biblical Noah and the Hindu story of Manu who was warned by Vishnu (in the form of a fish) to build a boat before the great flood. This convergence across Sumerian, Hebrew, and Hindu traditions suggests either shared cultural memory, common ancient events, or universal human storytelling themes.",
    tags: ["immortality", "flood myth", "friendship", "ancient"],
    similarCultures: [
      "Hindu (Manu)",
      "Hebrew (Noah)",
      "Greek (Deucalion)",
      "Chinese (Gun-Yu)",
    ],
    ritualsSection:
      "The New Year festival Akitu in ancient Sumer involved recitation of the Gilgamesh epic. Cedar forest was sacred in Mesopotamian cosmology.",
  },
  {
    id: "s12",
    title: "Dagda — The Good God of Celtic Ireland",
    culture: "Celtic / Irish",
    country: "Ireland",
    countryFlag: "🇮🇪",
    category: "Mythology",
    excerpt:
      "The Dagda possessed a magical cauldron that could feed all of Ireland without emptying, a club that could kill and resurrect, and a harp that controlled the seasons...",
    fullText:
      "The Dagda ('Good God') is the chief deity of the Tuatha Dé Danann in Irish mythology. He is a father figure and protector of the tribe, associated with agriculture, wisdom, and time. His three magical possessions define his power: a cauldron of plenty that never empties (paralleling the Hindu Akshayapatra), a massive club that can kill the living and resurrect the dead with its handle (paralleling Shiva's trishula and Odin's spear Gungnir), and a magical harp called Uaithne that could control the seasons and human emotions. The cauldron of plenty appears across many mythologies — the Holy Grail in Christian legend, the cornucopia in Greek myth, and the samudra manthan (churning of the ocean) producing Amrita in Hindu tradition. These parallel myths of divine abundance suggest universal human longing for inexhaustible nourishment.",
    tags: ["Celtic", "cauldron", "abundance", "Father god"],
    similarCultures: [
      "Hindu (Brahma/Shiva)",
      "Norse (Thor)",
      "Greek (Cronus/Dionysus)",
    ],
    ritualsSection:
      "Samhain (Halloween) has roots in Celtic festivals. The Dagda's union with the Morrigan at Samhain was a cosmic renewal ritual.",
  },
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
      "Norse",
    ],
    description:
      "A catastrophic flood sent by the divine, survived by one righteous person/family on a boat, appears across virtually every ancient civilization.",
  },
  {
    theme: "Creation through Cosmic Sacrifice",
    count: 8,
    cultures: [
      "Hindu (Purusha)",
      "Norse (Ymir)",
      "Mesopotamian (Tiamat)",
      "Chinese (Pangu)",
      "Aztec (Cipactli)",
    ],
    description:
      "The world is created from the body of a primordial being — the macrocosm emerges from the sacrifice of the microcosm.",
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
      "Shinto (Raijin)",
    ],
    description:
      "Proto-Indo-European mythology likely originated the thunder god archetype — a chief deity wielding lightning who maintains cosmic order.",
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
      "Aztec (Tonatiuh)",
    ],
    description:
      "Ancient cultures universally worshipped the sun and created myths to explain the daily solar cycle, often as a divine journey.",
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
      "African-American (Br'er Rabbit)",
    ],
    description:
      "Every mythology features a trickster — a figure who disrupts, challenges, and ultimately teaches through chaos and cunning.",
  },
  {
    theme: "World Tree / Cosmic Axis",
    count: 7,
    cultures: [
      "Norse (Yggdrasil)",
      "Hindu (Ashvattha)",
      "Mayan (Ceiba)",
      "Siberian (Shaman's tree)",
      "Egyptian (Djed pillar)",
    ],
    description:
      "The concept of a sacred tree or pillar connecting the underworld, earth, and heavens appears across unconnected ancient cultures.",
  },
];

const CULTURE_COLORS: Record<string, string> = {
  Hindu:
    "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
  Greek: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  Norse: "bg-slate-100 text-slate-800 dark:bg-slate-700/40 dark:text-slate-300",
  Egyptian:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  Shinto: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400",
  Chinese: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  Aztec: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  "Celtic / Irish":
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Akan / West African":
    "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  "Mesopotamian / Sumerian":
    "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-400",
};

export default function SpiritualStoriesPage() {
  const [activeTab, setActiveTab] = useState("stories");
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const filteredStories = STORIES.filter((s) => {
    const matchSearch =
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.culture.toLowerCase().includes(search.toLowerCase()) ||
      s.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchRegion =
      regionFilter === "all" ||
      s.country.toLowerCase().includes(regionFilter.toLowerCase()) ||
      s.culture.toLowerCase().includes(regionFilter.toLowerCase());
    const matchCat = categoryFilter === "all" || s.category === categoryFilter;
    return matchSearch && matchRegion && matchCat;
  });

  return (
    <div className="min-h-screen pb-12" data-ocid="spiritual.page">
      {/* Hero Header */}
      <div
        className="relative px-6 py-10 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.28 0.08 280 / 0.9) 0%, oklch(0.35 0.12 320 / 0.85) 50%, oklch(0.32 0.10 50 / 0.9) 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, oklch(0.8 0.15 60) 0%, transparent 50%), radial-gradient(circle at 80% 20%, oklch(0.7 0.2 280) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles size={22} className="text-amber-300" />
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
              Curated by Agent 21
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
            Spiritual &amp; Mythological Stories
          </h1>
          <p className="text-sm text-white/70">
            Explore myths, rituals, and beliefs across cultures — discover the
            threads that connect all of humanity
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList
            className="mb-6 grid grid-cols-4 w-full max-w-lg"
            data-ocid="spiritual.tab"
          >
            <TabsTrigger value="stories" data-ocid="spiritual.stories.tab">
              Stories
            </TabsTrigger>
            <TabsTrigger value="rituals" data-ocid="spiritual.rituals.tab">
              Rituals
            </TabsTrigger>
            <TabsTrigger
              value="connections"
              data-ocid="spiritual.connections.tab"
            >
              Connections
            </TabsTrigger>
            <TabsTrigger value="regions" data-ocid="spiritual.regions.tab">
              By Region
            </TabsTrigger>
          </TabsList>

          {/* ── Stories Tab ── */}
          <TabsContent value="stories">
            {/* Filter bar */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="relative flex-1 min-w-48">
                <Search
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  className="pl-8 h-9 text-sm"
                  placeholder="Search stories, cultures..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  data-ocid="spiritual.search_input"
                />
              </div>
              <Select value={regionFilter} onValueChange={setRegionFilter}>
                <SelectTrigger
                  className="h-9 w-44 text-sm"
                  data-ocid="spiritual.region.select"
                >
                  <SelectValue placeholder="All Regions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="India">India / Hindu</SelectItem>
                  <SelectItem value="Greece">Greece / Greek</SelectItem>
                  <SelectItem value="Norse">Norse / Scandinavia</SelectItem>
                  <SelectItem value="Egypt">Egypt</SelectItem>
                  <SelectItem value="Japan">Japan / Shinto</SelectItem>
                  <SelectItem value="China">China / Chinese</SelectItem>
                  <SelectItem value="Mexico">Aztec / Maya</SelectItem>
                  <SelectItem value="Celtic">Celtic / Irish</SelectItem>
                  <SelectItem value="Ghana">West Africa</SelectItem>
                  <SelectItem value="Iraq">Mesopotamian</SelectItem>
                </SelectContent>
              </Select>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger
                  className="h-9 w-44 text-sm"
                  data-ocid="spiritual.category.select"
                >
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Mythology">Mythology</SelectItem>
                  <SelectItem value="Rituals">Rituals</SelectItem>
                  <SelectItem value="Beliefs">Beliefs</SelectItem>
                  <SelectItem value="Similarities">Similarities</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {filteredStories.length === 0 ? (
              <div
                className="text-center py-16 text-muted-foreground"
                data-ocid="spiritual.stories.empty_state"
              >
                <BookOpen size={40} className="mx-auto mb-3 opacity-30" />
                <p>No stories found for your filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredStories.map((story, i) => (
                  <Card
                    key={story.id}
                    className="hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                    onClick={() => setSelectedStory(story)}
                    data-ocid={`spiritual.stories.item.${i + 1}`}
                  >
                    <CardContent className="p-5 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xl">{story.countryFlag}</span>
                        <Badge
                          className={`text-[10px] shrink-0 ${CULTURE_COLORS[story.culture] ?? "bg-primary/10 text-primary"}`}
                        >
                          {story.culture}
                        </Badge>
                      </div>
                      <h3 className="font-display font-semibold text-sm leading-snug">
                        {story.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-3">
                        {story.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex flex-wrap gap-1">
                          {story.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {story.similarCultures && (
                          <div className="flex items-center gap-1 text-[10px] text-primary">
                            <Link2 size={10} />
                            {story.similarCultures.length} links
                          </div>
                        )}
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="w-full h-7 text-xs"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStory(story);
                        }}
                        data-ocid={`spiritual.stories.read_button.${i + 1}`}
                      >
                        Read More →
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* ── Rituals & Beliefs Tab ── */}
          <TabsContent value="rituals">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground mb-4">
                Discover the rituals and belief systems that shape daily life,
                festivals, and ceremonies across cultures.
              </p>
              {STORIES.filter((s) => s.ritualsSection).map((story, i) => (
                <Card
                  key={story.id}
                  data-ocid={`spiritual.rituals.item.${i + 1}`}
                >
                  <CardContent className="p-4 flex gap-4">
                    <span className="text-2xl shrink-0">
                      {story.countryFlag}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-sm font-semibold">{story.title}</h4>
                        <Badge
                          className={`text-[10px] ${CULTURE_COLORS[story.culture] ?? "bg-primary/10 text-primary"}`}
                        >
                          {story.culture}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {story.ritualsSection}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* ── Cultural Connections Tab ── */}
          <TabsContent value="connections">
            <div className="mb-6">
              <h2 className="text-lg font-display font-bold mb-1">
                Cross-Culture Connections
              </h2>
              <p className="text-sm text-muted-foreground">
                These universal themes appear across unrelated cultures,
                suggesting shared human experience or ancient common roots.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {CROSS_CULTURE_CONNECTIONS.map((conn, i) => (
                <Card
                  key={conn.theme}
                  data-ocid={`spiritual.connections.item.${i + 1}`}
                >
                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-semibold text-sm">
                        {conn.theme}
                      </h3>
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {conn.count} cultures
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {conn.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {conn.cultures.map((c) => (
                        <span
                          key={c}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* ── By Region Tab ── */}
          <TabsContent value="regions">
            <div className="space-y-6">
              {[
                "India",
                "Greece",
                "Scandinavia",
                "Egypt",
                "Japan",
                "China",
                "Mexico",
                "Ireland",
                "Ghana",
                "Iraq (Ancient Sumer)",
              ].map((region) => {
                const regionStories = STORIES.filter(
                  (s) =>
                    s.country === region ||
                    s.culture.includes(region.split(" ")[0]),
                );
                if (regionStories.length === 0) return null;
                return (
                  <div key={region}>
                    <h3 className="text-base font-display font-bold mb-3 flex items-center gap-2">
                      <span>{regionStories[0]?.countryFlag}</span> {region}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {regionStories.map((story, i) => (
                        <Card
                          key={story.id}
                          className="cursor-pointer hover:shadow-md transition-shadow"
                          onClick={() => setSelectedStory(story)}
                          data-ocid={`spiritual.regions.item.${i + 1}`}
                        >
                          <CardContent className="p-4">
                            <h4 className="text-sm font-semibold mb-1 leading-snug">
                              {story.title}
                            </h4>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {story.excerpt}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Full Story Reader Modal */}
      <Dialog
        open={!!selectedStory}
        onOpenChange={(v) => !v && setSelectedStory(null)}
      >
        <DialogContent
          className="max-w-2xl max-h-[85vh] overflow-y-auto"
          data-ocid="spiritual.story.dialog"
        >
          {selectedStory && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{selectedStory.countryFlag}</span>
                  <Badge
                    className={`text-[10px] ${CULTURE_COLORS[selectedStory.culture] ?? "bg-primary/10 text-primary"}`}
                  >
                    {selectedStory.culture}
                  </Badge>
                </div>
                <DialogTitle className="font-display text-lg leading-snug">
                  {selectedStory.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-2">
                <p className="text-sm leading-relaxed text-foreground">
                  {selectedStory.fullText}
                </p>
                {selectedStory.ritualsSection && (
                  <div className="rounded-xl bg-secondary/50 p-4 space-y-1">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Associated Rituals & Festivals
                    </h4>
                    <p className="text-sm">{selectedStory.ritualsSection}</p>
                  </div>
                )}
                {selectedStory.similarCultures &&
                  selectedStory.similarCultures.length > 0 && (
                    <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-primary flex items-center gap-1">
                        <Link2 size={12} /> Cultural Connections
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedStory.similarCultures.map((c) => (
                          <span
                            key={c}
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedStory.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded bg-secondary text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedStory(null)}
                  data-ocid="spiritual.story.close_button"
                >
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

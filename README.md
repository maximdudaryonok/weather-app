# Weatherly - Modern Weather Application

A feature-rich weather application built with modern web technologies that provides real-time weather information with an intuitive user interface.

## Features

### 🌍 Geolocation Support

- Automatically detects user's current location
- Displays local weather information based on GPS coordinates
- Fallback mechanisms for location access issues

### ⭐ Favorite Cities

- Save frequently checked cities to favorites
- Quick access to weather for preferred locations
- Persistent storage using browser's local storage
- Manage favorite cities with add/remove functionality

### 🔍 Advanced Search

- Intelligent city search with autocomplete suggestions
- Search by city name, state, or country
- Search history tracking for quick access to recent searches
- Real-time search results as you type

### 🌓 Theme Switching

- Dark and light theme support
- System theme detection
- Smooth theme transitions
- Persistent theme preference

### 📊 Comprehensive Weather Data

- Current weather conditions with detailed information
- 5-day weather forecast
- Hourly temperature trends with interactive charts
- Weather details including humidity, wind speed, pressure, sunrise/sunset times

### 🎨 Responsive Design

- Mobile-first responsive layout
- Optimized for all screen sizes
- Touch-friendly interface elements
- Smooth animations and transitions

## Technologies Used

### Frontend Framework

- **React 19** - Modern React with latest features and optimizations
- **TypeScript** - Type-safe development with enhanced code quality

### Build Tools & Development

- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and consistency checks

### Styling & UI

- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **shadcn/ui** - High-quality component library
- **CSS Variables** - Dynamic theming support

### State Management & Data Fetching

- **TanStack Query (React Query)** - Powerful server state management
- **React Router DOM** - Client-side routing for multi-page experience

### Data Visualization

- **Recharts** - Interactive charts for temperature trends
- **Date-fns** - Modern date manipulation library

### UI Components & Interactions

- **Radix UI** - Accessible component primitives
- **cmdk** - Command palette for search functionality
- **Sonner** - Beautiful toast notifications

### APIs & Services

- **OpenWeatherMap API** - Real-time weather data
- **Browser Geolocation API** - Location detection

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd weather_app
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory and add:

```
VITE_PUBLIC_WEATHER_KEY=your_openweathermap_api_key
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── api/           # API configuration and weather service
├── components/     # React components
│   ├── context/    # React context providers
│   ├── pages/      # Page components
│   └── ui/         # Reusable UI components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── styles/        # Global styles and themes
```

## API Usage

This application uses the OpenWeatherMap API for weather data. You'll need to:

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your free API key
3. Add it to your `.env` file as `VITE_PUBLIC_WEATHER_KEY`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing weather data API
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework

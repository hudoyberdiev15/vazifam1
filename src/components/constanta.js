import {
    Checkroom, DeveloperMode, FaceRetouchingNatural,
    FitnessCenter,
    GraphicEq,
    Home,
    LiveTv, MusicNote,
    OndemandVideo,
    School,
    SportsEsports,
    TheaterComedy

} from "@mui/icons-material";

export const logo = 'https://static.thenounproject.com/png/5505951-200.png';


export const colors = {
    bgColor: 'linear-gradient(90deg, rgba(87, 199, 133, 1) 26%, rgba(42, 123, 155, 1) 80%);',
    fontColor: '#57C785'
}

export const categories = [
    {name: 'New', icon: <Home/>},
    {name: 'Movie', icon: <OndemandVideo/>},
    {name: 'Live', icon: <LiveTv/>},
    {name: 'Gaming', icon: <SportsEsports/>},
    {name: 'Education', icon: <School/>},
    {name: 'Sport', icon: <FitnessCenter/>},
    {name: 'Comedy', icon: <TheaterComedy/>},
    {name: 'Podcast', icon: <GraphicEq/>},
    {name: 'Fashion', icon: <Checkroom/>},
    {name: 'Crypto', icon: <DeveloperMode/>},
    {name: 'Gym', icon: <FitnessCenter/>},
    {name: 'Beauty', icon: <FaceRetouchingNatural/>},
    {name: 'Music', icon: <MusicNote/>},
]
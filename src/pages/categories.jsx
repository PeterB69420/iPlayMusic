import Footer from "../components/footer";
import Header from "../components/header";
import Wrapper from "../components/wrapper";

export default function Categories() {
    const categoriesData = [
        { name: 'Alternative', color: '#D2005E', subcategories: [] },
        {
          name: 'Blues', color: '#E44425',
          subcategories: [
            'Acoustic Blues',
            'Blues Rock',
            'Canadian Blues',
            'Jazz Blues',
            'Piano Blues',
            'Soul Blues',
            'Swamp Blues',
          ]
        },
        { name: 'Classical', color: '#F79210', subcategories: [] },
        { name: 'Country', color: '#F7C21A', subcategories: [] },
        { name: 'Dance', color: '#59B536', subcategories: [] },
        { name: 'Electronic', color: '#366C34', subcategories: [] },
        { name: 'Fitness & Workout', color: '#08B8C7', subcategories: [] },
        { name: 'Hip-Hop/Rap', color: '#00A0DB', subcategories: [] },
        { name: 'Industrial', color: '#0D448F', subcategories: [] },
      ];
    return (
        <>
        <Wrapper>
            <Header search heading='CATEGORIES' />
            
        </Wrapper>
        <Footer />
        </>
    )
}
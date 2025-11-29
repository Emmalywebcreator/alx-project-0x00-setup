import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />    
            <Card />    
            <Card />    
            <Button title="Rounded SM" styles="rounded-sm" />
            <Button title="Rounded MD" styles="rounded-md" />
            <Button title="Rounded LG" styles="rounded-lg" />
            <Button title="Rounded FULL" styles="rounded-full" />
        </div>
    )
}

export default Landing;
import { menuItems } from "../data/menu";

export default function Menu(){
    return(
    <div className="container mx-auto py-10 px-4">
        {menuItems.map((section, index) => (
            <div key={index} className="mb-8">
                <h2 className="text-2xl font-semibold bg-primary p-4 text-white text-center mb-4">{section.category}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {section.items.map((item, idx) => (
                        <div key={idx} className="p-4 border-2 border-primary shadow-lg rounded-xl bg-white">
                            <h3 className="text-lg font-medium">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                            <span className="text-primary font-bold mt-2 block">{item.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
    )
}
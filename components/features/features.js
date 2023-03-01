import Card from "./card"

export default function features({data}) {

  return (
    <section className="md:mx-24 mx-2 text-center flex-center flex-col font-outfit mt-28">
    <h2 className="h2">Why should choose us</h2>
    <p className="paraf my-6 mb-16">Because we always think of user needs and provide the best</p>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20" >
        {data.map(item => <Card key={item.fields.title} icon={item.fields.icon.fields.file} title={item.fields.title} desc={item.fields.desc} />)}
    </div>
    </section>
  )
}

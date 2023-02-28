import Card from "./card"

export default function features({data}) {
    console.log(data);

  return (
    <section className="mx-24 text-center">
    <h1 className="text-2xl">Why should choose us</h1>
    <p>Because we always think of user needs and provide the best</p>
    <div>
        {/* {data.map(item => <Card icon={item.fields} title={} />)} */}
    </div>
    </section>
  )
}

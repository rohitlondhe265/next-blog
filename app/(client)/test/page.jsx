async function fetchB() {
    const res = await fetch("http://localhost:3000/api/test", { cache: "no-cache" });
    return await res.json();
}

export default async function Page() {
    const data = await fetchB();
    const desc = data.description;

    const createMarkup = (content) => {
        return { __html: content };
    }
    return (<>
        <div dangerouslySetInnerHTML={createMarkup(desc)}></div>
        <h2>second para</h2>
        <article className="prose">
            <h1>Garlic bread with cheese: What the science tells us</h1>
            <p>For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween.</p>
            <p>But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country.</p>
        </article>
    </>)
}
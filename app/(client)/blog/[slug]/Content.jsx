
export default async function Page () {
    return (
        <main className="px-2 lg:px-12 bg-gray-100 space-y-3" style={{ flex: "5" }}>

            <img className='w-full p-3 lg:p-6 aspect-video' src="/demo/img3.png" alt="post image" />

            <article class="prose max-w-none text-justify lg:px-12">
                <h1>Garlic bread with cheese: What the science tells us</h1>
                <p>For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween.</p>
                <p>But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country.</p>
            </article>

        </main>
    )
}
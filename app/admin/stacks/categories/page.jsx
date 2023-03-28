"use client"
import Link from "next/link";

export default function Page() {
  return (
    <main className="w-full">
        <section className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold">All Categories</h3>
            <Link href="/admin/stacks/categories/add-new">
            <button className="btn btn-info gap-2 text-white" >
              <img src="/img/click.svg" className="w-9" alt="" />
              Add New Category
            </button>
          </Link>
        </section>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Meta Title</th>
              <th>Description</th>
              <th>Slug</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

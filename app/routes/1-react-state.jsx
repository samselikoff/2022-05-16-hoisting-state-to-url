import faker from "@faker-js/faker";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";

faker.seed(123);

let people = faker.datatype.array(20).map(() => {
  let firstName = faker.name.firstName();
  let lastName = faker.name.lastName();
  let name = `${firstName} ${lastName}`;
  let email = faker.internet.email(firstName, lastName).toLowerCase();

  return {
    name,
    title: faker.name.jobTitle(),
    email,
    role: faker.name.jobType(),
  };
});

export default function Index() {
  let [sort, setSort] = useState("");
  let [sortProp, desc] = sort.split(":");
  let sortedPeople = [...people].sort((a, b) => {
    return desc
      ? b[sortProp]?.localeCompare(a[sortProp])
      : a[sortProp]?.localeCompare(b[sortProp]);
  });

  return (
    <div className="max-w-6xl py-16 mx-auto lg:pt-32">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Users</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name,
              title, email and role.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        <SortableColumn
                          prop="name"
                          currentSort={sort}
                          onClick={(newSort) => setSort(newSort)}
                        >
                          Name
                        </SortableColumn>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        <SortableColumn
                          prop="title"
                          currentSort={sort}
                          onClick={(newSort) => setSort(newSort)}
                        >
                          Title
                        </SortableColumn>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        <SortableColumn
                          prop="email"
                          currentSort={sort}
                          onClick={(newSort) => setSort(newSort)}
                        >
                          Email
                        </SortableColumn>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        <SortableColumn
                          prop="role"
                          currentSort={sort}
                          onClick={(newSort) => setSort(newSort)}
                        >
                          Role
                        </SortableColumn>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sortedPeople.map((person) => (
                      <tr key={person.email}>
                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                          {person.name}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {person.title}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {person.email}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {person.role}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SortableColumn({ prop, currentSort, children, onClick }) {
  let [sortProp, desc] = currentSort?.split(":");
  let active = sortProp === prop;

  function handleClick() {
    if (!currentSort || prop !== sortProp) {
      onClick(prop);
    } else if (prop === sortProp && !desc) {
      onClick(`${prop}:desc`);
    } else if (prop === sortProp && desc) {
      onClick("");
    }
  }

  return (
    <button onClick={handleClick} className="inline-flex group">
      {children}
      <span
        className={`${
          active
            ? "text-gray-900 bg-gray-200 group-hover:bg-gray-300"
            : "invisible text-gray-400 group-hover:visible"
        } flex-none ml-2 rounded`}
      >
        <ChevronDownIcon
          className={`w-5 h-5 ${active && desc ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </span>
    </button>
  );
}

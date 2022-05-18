# Step

Thank Adam for letting me use Tailwind UI!

```js
<th
  scope="col"
  className="py-3.5 px-3 first:pl-4 text-left text-sm text-gray-900 sm:first:pl-6 last:pr-4 sm:last:pr-6"
>
```

# Step

```js
let [sort, setSort] = useState(null);
```

# Step

```js
let sortedPeople = people.sort((a, b) => a[sort]?.localeCompare(b[sort]));
```

# Step

```js
let [sortProp, desc] = sort?.split(":") || [];
let sortedPeople = people.sort((a, b) => {
  return desc
    ? b[sortProp]?.localeCompare(a[sortProp])
    : a[sortProp]?.localeCompare(b[sortProp]);
});
```

# Step

```js
let [sortProp, desc] = currentSort?.split(":") || [];
let newSort;

if (prop !== sortProp) {
  newSort = prop;
} else if (sortProp === prop && !desc) {
  newSort = `${prop}:desc`;
} else {
  newSort = null;
}
```

# Step

```js
let hasRendered = useRef();
let navigate = useNavigate();
useEffect(() => {
  if (!hasRendered.current) {
    hasRendered.current = true;
    return;
  }

  if (sort) {
    navigate(`/?sort=${sort}`);
  } else {
    navigate("/");
  }
}, [navigate, sort]);
```

# Step

```js
<Link to={`/?sort=${newSort}`} />
```

```js
let [searchParams] = useSearchParams();
```

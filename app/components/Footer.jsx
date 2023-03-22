export default function footer() {

  const bg = {
    backgroundImage : "url('/images/footer.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "bottom left"
  }

  return (
    <footer className="bg-gray-50 flex flex-col justify-center py-6" style={bg}>
              <p className="py-5 text-gray-600 text-center">Copyright ©2023 All rights reserved</p>
              <p className="text-gray-600 text-center">Terms & Condition</p>
    </footer>
  )
}
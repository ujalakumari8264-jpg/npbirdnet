import { CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

const StyleGuide = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">Style Guide</h1>
            <p className="text-sm sm:text-base text-gray-600">Bird Net India - Design System Reference</p>
          </div>

          {/* Color Palette */}
          <section className="mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Color Palette</h2>

            {/* Primary Colors */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Primary Colors (60%)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-primary rounded-lg sm:rounded-xl p-4 sm:p-6 text-white">
                  <div className="text-xs sm:text-sm opacity-80 mb-1 sm:mb-2">Primary</div>
                  <div className="font-mono text-sm sm:text-lg">#1E3A8A</div>
                </div>
                <div className="bg-primary-dark rounded-lg sm:rounded-xl p-4 sm:p-6 text-white">
                  <div className="text-xs sm:text-sm opacity-80 mb-1 sm:mb-2">Primary Dark</div>
                  <div className="font-mono text-sm sm:text-lg">#1E40AF</div>
                </div>
                <div className="bg-primary-light rounded-lg sm:rounded-xl p-4 sm:p-6 text-white">
                  <div className="text-xs sm:text-sm opacity-80 mb-1 sm:mb-2">Primary Light</div>
                  <div className="font-mono text-sm sm:text-lg">#3B82F6</div>
                </div>
              </div>
            </div>

            {/* Accent Colors */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Accent Colors (10%)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-accent rounded-lg sm:rounded-xl p-4 sm:p-6 text-white">
                  <div className="text-xs sm:text-sm opacity-80 mb-1 sm:mb-2">Accent</div>
                  <div className="font-mono text-sm sm:text-lg">#0EA5E9</div>
                </div>
                <div className="bg-accent-dark rounded-lg sm:rounded-xl p-4 sm:p-6 text-white">
                  <div className="text-xs sm:text-sm opacity-80 mb-1 sm:mb-2">Accent Dark</div>
                  <div className="font-mono text-sm sm:text-lg">#0284C7</div>
                </div>
                <div className="bg-accent-light rounded-lg sm:rounded-xl p-4 sm:p-6 text-white">
                  <div className="text-xs sm:text-sm opacity-80 mb-1 sm:mb-2">Accent Light</div>
                  <div className="font-mono text-sm sm:text-lg">#38BDF8</div>
                </div>
              </div>
            </div>

            {/* Semantic Colors */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Semantic Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-success rounded-lg sm:rounded-xl p-4 sm:p-6 text-white">
                  <div className="text-xs sm:text-sm opacity-80 mb-1 sm:mb-2">Success</div>
                  <div className="font-mono text-xs sm:text-lg">#10B981</div>
                </div>
                <div className="bg-error rounded-lg sm:rounded-xl p-4 sm:p-6 text-white">
                  <div className="text-xs sm:text-sm opacity-80 mb-1 sm:mb-2">Error</div>
                  <div className="font-mono text-xs sm:text-lg">#EF4444</div>
                </div>
                <div className="bg-warning rounded-lg sm:rounded-xl p-4 sm:p-6 text-white">
                  <div className="text-xs sm:text-sm opacity-80 mb-1 sm:mb-2">Warning</div>
                  <div className="font-mono text-xs sm:text-lg">#F59E0B</div>
                </div>
                <div className="bg-blue-500 rounded-lg sm:rounded-xl p-4 sm:p-6 text-white">
                  <div className="text-xs sm:text-sm opacity-80 mb-1 sm:mb-2">Info</div>
                  <div className="font-mono text-xs sm:text-lg">#3B82F6</div>
                </div>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section className="mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Typography</h2>
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Heading 1 - 4xl</h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Heading 2 - 3xl</h2>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Heading 3 - 2xl</h3>
              <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Heading 4 - xl</h4>
              <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">Large paragraph text - lg</p>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Base paragraph text - base</p>
              <p className="text-xs sm:text-sm text-gray-500">Small text - sm</p>
            </div>
          </section>

          {/* Buttons */}
          <section className="mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Buttons</h2>
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  <button className="bg-accent text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-accent-dark transition-colors">
                    Primary Button
                  </button>
                  <button className="bg-white text-primary border-2 border-primary px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-primary hover:text-white transition-colors">
                    Secondary Button
                  </button>
                  <button className="bg-success text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-green-600 transition-colors">
                    Success Button
                  </button>
                  <button className="bg-error text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-red-600 transition-colors">
                    Error Button
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  <button className="bg-accent text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-accent-dark transition-colors">
                    Small Button
                  </button>
                  <button className="bg-accent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-accent-dark transition-colors">
                    Large Button
                  </button>
                  <button className="bg-gray-300 text-gray-500 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold cursor-not-allowed" disabled>
                    Disabled Button
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Cards */}
          <section className="mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Cards</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Basic Card</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">This is a basic card with shadow and hover effect.</p>
                <a href="#" className="text-sm sm:text-base text-accent font-semibold hover:text-accent-dark">Learn More →</a>
              </div>
              <div className="bg-primary rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-white hover:shadow-xl transition-all">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Primary Card</h3>
                <p className="text-sm sm:text-base text-blue-100 mb-3 sm:mb-4">This is a card with primary background color.</p>
                <a href="#" className="text-sm sm:text-base text-white font-semibold hover:text-blue-200">Learn More →</a>
              </div>
              <div className="bg-accent rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-white hover:shadow-xl transition-all sm:col-span-2 lg:col-span-1">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Accent Card</h3>
                <p className="text-sm sm:text-base text-blue-100 mb-3 sm:mb-4">This is a card with accent background color.</p>
                <a href="#" className="text-sm sm:text-base text-white font-semibold hover:text-blue-200">Learn More →</a>
              </div>
            </div>
          </section>

          {/* Alerts */}
          <section className="mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Alerts</h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-success-light border-l-4 border-success rounded-lg p-3 sm:p-4 flex items-start">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-success mr-2 sm:mr-3 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-900 mb-0.5 sm:mb-1 text-sm sm:text-base">Success</h4>
                  <p className="text-green-800 text-xs sm:text-sm">Your request has been completed successfully.</p>
                </div>
              </div>
              <div className="bg-error-light border-l-4 border-error rounded-lg p-3 sm:p-4 flex items-start">
                <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-error mr-2 sm:mr-3 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-900 mb-0.5 sm:mb-1 text-sm sm:text-base">Error</h4>
                  <p className="text-red-800 text-xs sm:text-sm">There was an error processing your request.</p>
                </div>
              </div>
              <div className="bg-warning-light border-l-4 border-warning rounded-lg p-3 sm:p-4 flex items-start">
                <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-warning mr-2 sm:mr-3 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-900 mb-0.5 sm:mb-1 text-sm sm:text-base">Warning</h4>
                  <p className="text-amber-800 text-xs sm:text-sm">Please review your information before proceeding.</p>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-3 sm:p-4 flex items-start">
                <Info className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mr-2 sm:mr-3 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-0.5 sm:mb-1 text-sm sm:text-base">Info</h4>
                  <p className="text-blue-800 text-xs sm:text-sm">Here's some helpful information for you.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Form Elements */}
          <section className="mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Form Elements</h2>
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Text Input</label>
                  <input type="text" placeholder="Enter text..." className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Select</label>
                  <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Textarea</label>
                  <textarea rows={4} placeholder="Enter message..." className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"></textarea>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="checkbox" className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" />
                  <label htmlFor="checkbox" className="ml-2 text-xs sm:text-sm text-gray-700">I agree to the terms and conditions</label>
                </div>
              </div>
            </div>
          </section>

          {/* Badges */}
          <section className="mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Badges</h2>
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="bg-primary text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">Primary</span>
                <span className="bg-accent text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">Accent</span>
                <span className="bg-success text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">Success</span>
                <span className="bg-error text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">Error</span>
                <span className="bg-warning text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">Warning</span>
                <span className="bg-gray-200 text-gray-700 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">Neutral</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;

import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import { getBlogById, getRelatedBlogs } from "../data/blogData";

const BlogDetail = () => {
  const { blogId } = useParams();

  // Get blog data
  const blog = getBlogById(blogId);
  const relatedBlogs = getRelatedBlogs(blogId);

  // Default blog if not found
  const defaultBlog = {
    title: "NP Bird Netting Solutions Guide",
    date: "December 2024",
    author: "NP Bird Net India",
    category: "Tips & Guides",
    sections: [
      {
        heading: "Introduction",
        content: "Bird infestation is a serious problem faced by many homeowners and businesses. Birds, especially pigeons, can cause significant damage to property and pose health risks through their droppings. NP Bird netting is one of the most effective solutions for pest control."
      },
      {
        heading: "Benefits",
        content: "Complete protection from bird infestations. Humane solution that doesn't harm birds. Long-lasting and durable. Maintains property aesthetics. Cost-effective in the long run."
      },
      {
        heading: "Our Services",
        content: "Our professional NP bird netting services provide customized solutions for residential, commercial, and industrial properties. We use high-quality HDPE nets that are UV stabilized and come with a 4-5 year warranty. Call today for a free consultation."
      }
    ]
  };

  const currentBlog = blog || defaultBlog;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Content Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link to="/blogs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 sm:mb-6 transition-colors font-medium text-sm sm:text-base">
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />
              Back to Blogs
            </Link>

            <article className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 lg:p-8 xl:p-12">
              {/* Blog Header */}
              <div className="mb-6 sm:mb-8">
                <span className="inline-block bg-blue-100 text-blue-700 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">{currentBlog.category}</span>
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">{currentBlog.title}</h1>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 text-slate-500 text-xs sm:text-sm">
                  <span className="flex items-center"><Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />{currentBlog.date}</span>
                  <span className="flex items-center"><User className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />{currentBlog.author}</span>
                </div>
              </div>

              {/* Blog Image */}
              {currentBlog.image && (
                <div className="mb-6 sm:mb-8 rounded-lg overflow-hidden">
                  <img
                    src={currentBlog.image}
                    alt={currentBlog.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                </div>
              )}

              {/* Blog Content */}
              <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                {currentBlog.sections && currentBlog.sections.map((section, index) => (
                  <div key={index} className="mb-6 sm:mb-8">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">{section.heading}</h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{section.content}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* Related Posts */}
            <div className="mt-8 sm:mt-10 lg:mt-12">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {relatedBlogs.map((relatedBlog) => (
                  <Link key={relatedBlog.id} to={`/blogs/${relatedBlog.id}`} className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-5 lg:p-6 hover:shadow-xl transition-all group">
                    <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{relatedBlog.title}</h4>
                    <span className="inline-flex items-center text-blue-600 font-medium mt-2 sm:mt-3 text-sm">
                      Read More <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 sm:mt-10 lg:mt-12 bg-blue-600 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 text-center text-white">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Need NP Bird Control Solutions?</h3>
              <p className="text-blue-100 mb-4 sm:mb-6 text-sm sm:text-base">Call our experts for a free consultation</p>
              <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-50 transition-colors">
                Contact <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-1.5 sm:ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;

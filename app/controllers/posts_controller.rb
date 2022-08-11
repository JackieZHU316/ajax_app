class PostsController < ApplicationController

  def index
    # @posts = Post.all
    # @posts = Post.order(id: "DESC")
    @posts = Post.order(id: "DESC")
  end

  # コメントアウトする
  # def new
  # end

  def create
    # binding.pry
    post = Post.create(content: params[:content])
    # Post.create(content: params[:content])
    # redirect_to action: :index
    render json:{ post: post }
  end
end

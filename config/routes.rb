Rails.application.routes.draw do
  # get 'posts', to: 'posts#index'  # 編集する
  # get 'posts/new', to: 'posts#new'  # 削除する 
  root to: 'posts#index'  
  post 'posts', to: 'posts#create'
end

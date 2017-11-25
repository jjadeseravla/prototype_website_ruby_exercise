require 'sinatra'
get '/' do
  erb :index
end

get '/names' do
  'Jade and Olly'
end

from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
# from django.contrib.auth.models import User
from .forms import TweetForms,UserRegistrationForm
from .models import Tweet
from django.shortcuts import get_list_or_404,redirect
from django.contrib.auth import login
from pathlib import Path


# Create your views here.
def tweet_list(request):
    all_tweets = Tweet.objects.all().order_by('-create_at')
    res = render(request, 'index.html', {'all_tweets':all_tweets})
    # print(res.content.decode())
    print(res["Content-Type"])
    data = Path("static/raw_html.html").read_text()
    return HttpResponse(data,content_type="text/html")


def create(request):
    if request.method == 'POST':
        form  = TweetForms(request.POST, request.FILES)
        if form.is_valid():
            tweet = form.save(commit=False)
            tweet.user = request.user
            tweet.save()
            return redirect('tweet_list')
    else:
        form = TweetForms()
    return render(request, 'tweet_form.html', {'form':form})


def edit(request,id):
    tweet = get_list_or_404(Tweet, pk=id, user = request.user)
    if request.method == "POST":
        form  = TweetForms(request.POST, request.FILES, instance=tweet)
        if(form.is_valid()):
            tweet = form.save(commit=False)
            tweet.user = request.user
            tweet.save()
            return redirect("tweet_list")
    else:
        form = TweetForms(instance=tweet)
        return render(request, 'tweet_form.html', {'form':form})



def delete(request,id):
    tweet = get_object_or_404(Tweet, pk=id, user = request.user)
    if(request.method == "POST"):
        tweet.delete()
        return redirect("tweet_list")
    return render(request, 'tweet_delete.html',{'tweet':tweet})



def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.setPassword(form.cleaned_data['password1'])
            user.save()
            login(request,user)
            return redirect('tweet_list')
    else:
        form  = UserRegistrationForm()
    return render(request, 'registration/register.html', {'form':form})